//Returns a DOM Element that displays the product information.
export function renderProduct(productData) {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const colDiv = document.createElement('div');
    const rowDiv = document.createElement('div');
    const rowDiv2 = document.createElement('div');
    const h3 = document.createElement('h3');
    const priceSpan = document.createElement('span');
    const paragraph = document.createElement('p');
    const categorySpan = document.createElement('span');
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
            alert('Congratulations, you purchased ' + productData.name + '!');
        }
    });
    
    rowDiv2.appendChild(priceSpan);
    rowDiv2.appendChild(buyButton);
    rowDiv.appendChild(h3);
    rowDiv.appendChild(rowDiv2);
    colDiv.appendChild(rowDiv);
    colDiv.appendChild(paragraph);
    colDiv.appendChild(categorySpan);
    li.appendChild(image);
    li.appendChild(colDiv);

    return li;
}