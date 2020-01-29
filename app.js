// import data - 21 product objects in an array
import { findById, displayThreeProducts } from './utils.js';

const form = document.querySelector('form');


// initialize state
let numberOfSelections = 0;
let productVotesDetails = [];

displayThreeProducts();

// change state
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const stringyResultsHistory = localStorage.getItem('results');

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
    // send user to Results page after 25
    if (numberOfSelections === 25) {
        // get localStorage
        localStorage.getItem('results');
        // stringify results array
        const stringyResults = JSON.stringify(productVotesDetails);
        //set results array into local storage
        localStorage.setItem('results', stringyResults);

        // Alert about completing selections and impending redirect
        alert('Thanks for participating! You will now be redirected to your Results Summary.');

        // redirect user to Results page
        window.location = './results.html';
    }


});
