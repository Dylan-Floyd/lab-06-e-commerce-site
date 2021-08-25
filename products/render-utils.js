import { addToCart } from '../data/cart-utils.js';

function renderQuantitySelector() {
    const selectEl = document.createElement('select');
    const qtyOne = document.createElement('option');
    const qtyTwo = document.createElement('option');
    const qtyThree = document.createElement('option');
    qtyOne.value = '1';
    qtyOne.textContent = '1';
    qtyTwo.value = '2';
    qtyTwo.textContent = '2';
    qtyThree.value = '3';
    qtyThree.textContent = '3';
    selectEl.append(qtyOne, qtyTwo, qtyThree);
    return selectEl;
}
//Returns a DOM Element that displays the product information.
export function renderProduct(productData, cartToAddProductsTo) {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const colDiv = document.createElement('div');
    const rowDiv = document.createElement('div');
    const rowDiv2 = document.createElement('div');
    const h3 = document.createElement('h3');
    const priceSpan = document.createElement('span');
    const paragraph = document.createElement('p');
    const categorySpan = document.createElement('span');
    const quantitySelect = renderQuantitySelector();
    const buyButton = document.createElement('button');

    li.id = productData.id;
    li.className = 'cat';
    image.src = productData.image;
    colDiv.className = 'col';
    rowDiv.className = 'row';
    rowDiv2.className = 'row';
    h3.textContent = productData.name;
    priceSpan.className = 'price-span';
    priceSpan.textContent = `Price: ${(productData.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))}`;
    paragraph.textContent = productData.description;
    categorySpan.textContent = `Category: ${productData.category}`;
    buyButton.textContent = 'Add to Cart';
    buyButton.addEventListener('click', () => {
        if (productData.name === 'Stella') {
            alert('YOU CAN\'T HAVE HER');
        } else {
            //credit: https://ricardometring.com/getting-the-value-of-a-select-in-javascript
            let quantity = Number(quantitySelect.options[quantitySelect.selectedIndex].value);
            addToCart(cartToAddProductsTo, productData.id, quantity);
        }
    });
    
    rowDiv2.append(priceSpan, quantitySelect, buyButton);
    rowDiv.appendChild(h3);
    rowDiv.appendChild(rowDiv2);
    colDiv.appendChild(rowDiv);
    colDiv.appendChild(paragraph);
    colDiv.appendChild(categorySpan);
    li.appendChild(image);
    li.appendChild(colDiv);

    return li;
}
