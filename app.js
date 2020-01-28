// import data - 21 product objects in an array
import productData from './productData.js';
import { ProductArray } from './productArray.js';

// get elements from DOM
const selectedInput = document.querySelector('input:checked');
const selectedProduct = selectedInput.value;

function getRandomProduct() {
    const randomProductNumber = Math.floor(Math.random() * productArray.length);
    const randomProduct = productArray[randomProductNumber];
}

