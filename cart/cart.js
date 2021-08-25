import { cats, fruits } from '../data/product-data.js';
import { CAT_CART, FRUIT_CART, getCart, updateCart } from '../data/cart-utils.js';
import { renderTable } from './cart-render-utils.js';
import { calcMultiOrderTotal } from '../utils.js';

const tableContainer = document.querySelector('#table-container');
const grandestTotalSpan = document.querySelector('#grandest-total-span');
const orderButton = document.querySelector('#order-button');

let catCart = getCart(CAT_CART);
let fruitCart = getCart(FRUIT_CART);

const catTable = renderTable(catCart, cats, 'Cat');
const fruitTable = renderTable(fruitCart, fruits, 'Fruit');
tableContainer.append(catTable, fruitTable);

const allOrderData = [
    {
        cartData: catCart,
        products: cats
    },
    {
        cartData: fruitCart,
        products: fruits
    }
];

let grandestTotalString = calcMultiOrderTotal(allOrderData);
grandestTotalSpan.textContent = 'Grandest Total: ' + grandestTotalString;

orderButton.addEventListener('click', () => {
    let stringyData = JSON.stringify(catCart) + '\n' + JSON.stringify(fruitCart);
    alert('You bought stuff! \n' + stringyData);
    updateCart(CAT_CART, []);
    updateCart(FRUIT_CART, []);
    window.location = '../';
});