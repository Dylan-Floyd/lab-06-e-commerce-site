import { calcItemTotal } from '../utils.js';
import { calcOrderTotal, findById } from '../utils.js';

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

export function renderTable(cart, products, productsType) {
    //create elements
    const table = document.createElement('table');

    const tHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const typeHeading = document.createElement('th');
    const priceHeading = document.createElement('th');
    const quantityHeading = document.createElement('th');
    const totalHeading = document.createElement('th');

    const tBody = document.createElement('tbody');
    
    const tFoot = document.createElement('tfoot');
    const footRow = document.createElement('tr');
    const grandTotalLabel = document.createElement('td');
    const grandTotalCell = document.createElement('td');

    //flesh-out elements
    table.className = 'minimalistBlack';

    typeHeading.textContent = productsType;
    priceHeading.textContent = 'Price';
    quantityHeading.textContent = 'Quantity';
    totalHeading.textContent = 'Total';

    grandTotalLabel.colSpan = '3';
    grandTotalLabel.textContent = 'Grand Total:';

    //add in rows
    for (let cartItem of cart) {
        const productData = findById(products, cartItem.id);
        const newRow = renderLineItem(cartItem, productData);
        tBody.appendChild(newRow);
    }

    //display grand total
    grandTotalCell.textContent = calcOrderTotal(cart, products);

    //put the elements together
    headerRow.append(typeHeading, priceHeading, quantityHeading, totalHeading);
    tHead.append(headerRow);

    footRow.append(grandTotalLabel, grandTotalCell);
    tFoot.append(footRow);

    table.append(tHead, tBody, tFoot);
    
    return table;
}