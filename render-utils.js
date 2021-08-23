/*
Returns a DOM Element that displays the product information.

Example input object:
    {
        id: 123,
        name: 'Tony the Tiger',
        image: './assets/tony-the-tiger.jpg',
        description: 'Tony the Tiger is looking for a loving home after the bankruptcy of Nabisco International. Good with kids, other cats, and dogs. Mildy in the uncanny valley. All IP included.',
        category: 'Corporate Shill Cat',
        price: '400m'
    }

Would return:
    <li id=123 class="cat">
        <img src="./assets/tony-the-tiger.jpg">
        <div class="col">
            <div class="row">
                <h3>Tony the Tiger</h3>
                <span class="price-span">Price: $400m</span>
            </div>
            <p>Tony the Tiger is looking for a loving home after the bankruptcy of Nabisco International. Good with kids, other cats, and dogs. Mildy in the uncanny valley. All IP included.</p>
            <span>Category: Corporate Shill Cat</span>
        </div>
    </li>
*/
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
    priceSpan.textContent = `Price: ${productData.price}`;
    paragraph.textContent = productData.description;
    categorySpan.textContent = `Category: ${productData.category}`;
    buyButton.textContent = 'Buy Now';
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