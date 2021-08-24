import { cats, fruits } from '../data/product-data.js';
import { catCart, fruitCart } from '../data/cart-data.js';
import { renderTable } from './cart-render-utils.js';

const tableContainer = document.querySelector('#table-container');

const catTable = renderTable(catCart, cats, 'Cat');
const fruitTable = renderTable(fruitCart, fruits, 'Fruit');
tableContainer.append(catTable, fruitTable);