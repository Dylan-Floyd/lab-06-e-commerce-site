import { renderLineItem } from '../cart/render-line-item.js';

const test = QUnit.test;

const testLineItemData = {
    id: 1,
    quantity: 2
};

const testProductData = {
    id: 1,
    price: 2,
    name: 'test cat'
};

test('renderLineItem creates the appropriate HTML elements', expect => {
    const expected = '<tr><td>test cat</td><td>$2.00</td><td>2</td><td>$4.00</td></tr>';
    const actual = renderLineItem(testLineItemData, testProductData).outerHTML;
    expect.equal(actual, expected);
});
