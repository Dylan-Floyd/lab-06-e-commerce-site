import { renderProduct } from './render-utils.js';
import { cats, fruits } from '../data/product-data.js';

const catList = document.getElementById('cat-list');
const fruitlist = document.getElementById('fruit-list');

for (let cat of cats) {
    catList.appendChild(renderProduct(cat));
}

for (let fruit of fruits) {
    fruitlist.appendChild(renderProduct(fruit));
}