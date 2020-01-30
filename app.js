// import data - 21 product objects in an array
import { findById, displayThreeProducts } from './utils/utils.js';
import { displaySessionResults } from './results/displaySessionResults.js';

// get needed elements from DOM
const resultsDiv = document.getElementById('results-container');
const productSelectionDiv = document.getElementById('product-selection');
const resetButton = document.getElementById('reset-button');
const form = document.querySelector('form');

// initialize state
let numberOfSelections = 0;
let productVotesDetails = [];

// display 3 random products
displayThreeProducts();

// on selection submission:
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedInput = document.querySelector('input:checked');
    const selectedProduct = selectedInput.value;

    // increment the total number of session selections
    numberOfSelections++;

    // increase the number of votes if product has been selected already, otherwise add the product with 1 vote
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
    if (numberOfSelections === 25) {

        // Alert about completing selections and impending redirect
        alert('Thanks for participating! You will now be shown your Results Summary.');

        // display session results
        productSelectionDiv.style.display = 'none';
        resultsDiv.style.display = 'block';

        displaySessionResults(productVotesDetails);

    }
});

resetButton.addEventListener('click', () => {
    productSelectionDiv.style.display = 'block';
    resultsDiv.style.display = 'none';

    numberOfSelections = 0;
    productVotesDetails = [];

});
