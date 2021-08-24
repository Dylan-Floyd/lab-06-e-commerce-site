import { renderProduct } from './render-utils.js';
import { products } from './product-data.js';

const list = document.getElementById('list');

for (let productData of products) {
    list.appendChild(renderProduct(productData));
}