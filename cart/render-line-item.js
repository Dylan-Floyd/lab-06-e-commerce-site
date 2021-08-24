import { calcItemTotal } from '../utils.js';

export function renderLineItem(cartItem, productData) {
    const rowEl = document.createElement('tr');
    const nameEl = document.createElement('td');
    const priceEl = document.createElement('td');
    const quantityEl = document.createElement('td');
    const totalEl = document.createElement('td');

    nameEl.textContent = productData.name;
    priceEl.textContent = productData.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityEl.textContent = cartItem.quantity;
    totalEl.textContent = calcItemTotal(cartItem.quantity, productData.price);
    rowEl.append(nameEl, priceEl, quantityEl, totalEl);

    return rowEl;
}