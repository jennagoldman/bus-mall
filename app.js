// import data - 21 product objects in an array
import { findById, displayThreeProducts } from './utils.js';

const resultsDiv = document.getElementById('results-container');
const productSelectionDiv = document.getElementById('product-selection');
const resetButton = document.getElementById('reset-button');
const sessionResultsCanvas = document.getElementById('session-results-history');
const form = document.querySelector('form');

// initialize state
let numberOfSelections = 0;
let productVotesDetails = [];

displayThreeProducts();

// change state
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedInput = document.querySelector('input:checked');
    const selectedProduct = selectedInput.value;

    numberOfSelections++;

    const productInVotesArray = findById(productVotesDetails, selectedProduct); 
    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        productVotesDetails.push({
            id: selectedProduct,
            votes: 1
        });
    }

    // clear out previous input selection
    document.querySelector('input[name="products"]:checked').checked = false;
    
    // generate 3 new products and images
    displayThreeProducts();

    // show user session results after 25 selections
    if (numberOfSelections === 5) {
        // get localStorage
        localStorage.getItem('alltime-results');
        // stringify results array
        const stringyResults = JSON.stringify(productVotesDetails);
        //set results array into local storage
        localStorage.setItem('alltime-results', stringyResults);

        // Alert about completing selections and impending redirect
        alert('Thanks for participating! You will now be redirected to your Results Summary.');

        // display session results on page using Chart.js
        productSelectionDiv.style.display = 'none';
        resultsDiv.style.display = 'block';

        const votes = [];
        const labels = [];

        productVotesDetails.forEach(item => {
            votes.push(item.votes);
            labels.push(item.id);
        });

        const ctx = sessionResultsCanvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: ['#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF']
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    

});

resetButton.addEventListener('click', () => {
    productSelectionDiv.style.display = 'block';
    resultsDiv.style.display = 'none';

    numberOfSelections = 0;
    productVotesDetails = [];

});
