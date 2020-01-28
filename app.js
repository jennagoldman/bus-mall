// import data - 21 product objects in an array
import { productData } from './productData.js';
import { ProductArray } from './productArray.js';

const products = new ProductArray(productData);

// get elements from DOM
const productImage1 = document.getElementById('img1');
const productImage2 = document.getElementById('img2');
const productImage3 = document.getElementById('img3');
const selectedInput = document.getElementById('input:checked');

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

productImage1.src = randomProduct1.img;
productImage2.src = randomProduct2.img;
productImage3.src = randomProduct3.img;