export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getProducts() {
        return this.products;
    }

    removeProductById(someId) {
        this.products.forEach((product, i) => {
            if (someId === product.id) {
                this.products.splice(i, 1);
            }
        });
    }

    getProductById(someId) {
        let productMatch;

        this.products.forEach(product => {
            if (someId === product.id) {
                productMatch = product;
            }
        });

        return productMatch;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }

}