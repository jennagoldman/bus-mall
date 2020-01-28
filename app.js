// import data - 21 product objects in an array
import { productData } from './productData.js';
import { ProductArray } from './productArray.js';

const products = new ProductArray(productData);

// get elements from DOM
const productImage1 = document.getElementById('img1');
const productImage2 = document.getElementById('img2');
const productImage3 = document.getElementById('img3');
const productInputs = document.querySelectorAll('input');
const selectedInput = document.querySelector('input:checked');
const submitSelectionButton = document.getElementById('submit-selection-button');

// initialize state
let numberOfSelections = 0;

// change state
submitSelectionButton.addEventListener('click', () => {
    const selectedInput = document.querySelector('input:checked');
    numberOfSelections++;

    console.log(selectedInput.id);
    console.log(numberOfSelections);
});


// setup random image generation logic
const randomProduct1 = products.getRandomProduct();
let randomProduct2 = products.getRandomProduct();
let randomProduct3 = products.getRandomProduct();

while (randomProduct1 === randomProduct2) {
    randomProduct2 = products.getRandomProduct();
}

while (randomProduct1 === randomProduct3) {
    randomProduct3 = products.getRandomProduct();
}

while (randomProduct2 === randomProduct3) {
    randomProduct3 = products.getRandomProduct();
}

// populate random images in image src
productImage1.src = randomProduct1.img;
productImage2.src = randomProduct2.img;
productImage3.src = randomProduct3.img;
