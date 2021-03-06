import { productData } from '../data/productData.js';

// get product label elements

// get product input elements
const productInput1 = document.getElementById('product1-input');
const productInput2 = document.getElementById('product2-input');
const productInput3 = document.getElementById('product3-input');

// get product image elements
const productImage1 = document.getElementById('img1');
const productImage2 = document.getElementById('img2');
const productImage3 = document.getElementById('img3');
const products = productData.slice();

// setup random image generation logic
export function getRandomProduct() {
    const randomProductIndex = Math.floor(Math.random() * products.length);
    return products[randomProductIndex];
}


export function displayThreeProducts() {
    const randomProduct1 = getRandomProduct();
    let randomProduct2 = getRandomProduct();
    let randomProduct3 = getRandomProduct();
    while (randomProduct1 === randomProduct2) {
        randomProduct2 = getRandomProduct();
    }
    while (randomProduct1 === randomProduct3) {
        randomProduct3 = getRandomProduct();
    }
    while (randomProduct2 === randomProduct3) {
        randomProduct3 = getRandomProduct();
    }
    // populate input values with product id
    productInput1.value = randomProduct1.id;
    productInput2.value = randomProduct2.id;
    productInput3.value = randomProduct3.id;
    // populate random images in image src
    productImage1.src = randomProduct1.img;
    productImage2.src = randomProduct2.img;
    productImage3.src = randomProduct3.img;
}



export const findById = (someArray, someId) => {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        // check the id against item.id
        if (item.id === someId) {
            return item;
        }
    } return null;
};