import { products } from '../data/product-data.js';
import { cartData } from '../data/cart-data.js';
import { renderLineItem } from './render-line-item.js';
import { calcOrderTotal, findById } from '../utils.js';

const tableBody = document.querySelector('#table-body');
const grandTotal = document.querySelector('#grand-total');

for (let cartItem of cartData) {
    const productData = findById(products, cartItem.id);
    const newRow = renderLineItem(cartItem, productData);
    tableBody.appendChild(newRow);
}

grandTotal.textContent = calcOrderTotal(cartData, products);