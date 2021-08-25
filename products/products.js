import { renderProduct } from './render-utils.js';
import { cats, fruits } from '../data/product-data.js';
import { CAT_CART, FRUIT_CART } from '../data/cart-utils.js';

const catList = document.getElementById('cat-list');
const fruitlist = document.getElementById('fruit-list');

for (let cat of cats) {
    catList.appendChild(renderProduct(cat, CAT_CART));
}

for (let fruit of fruits) {
    fruitlist.appendChild(renderProduct(fruit, FRUIT_CART));
}