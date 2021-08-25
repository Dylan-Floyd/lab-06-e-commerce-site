import { renderTable, renderLineItem } from '../cart/cart-render-utils.js';

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

const testCart = [
    {
        id: 1,
        quantity: 2
    },
    {
        id: 2,
        quantity: 3
    }
];

const testProducts = [
    {
        id: 1,
        price: 2.30,
        name: 'test product 1'
    },
    {
        id: 2,
        price: 1.23,
        name: 'test product 2'
    }
];

test('renderLineItem creates the appropriate HTML elements', expect => {
    const expected = '<tr><td>test cat</td><td>$2.00</td><td>2</td><td>$4.00</td></tr>';
    const actual = renderLineItem(testLineItemData, testProductData).outerHTML;
    expect.equal(actual, expected);
});

test('renderTable create the appropriate HTML elements', expect => {
    const expected =
    // eslint-disable-next-line no-useless-escape
                '<table class=\"minimalistBlack\">' +
                    '<thead>' +
                        '<tr>' + 
                            '<th>Test Items</th>' +
                            '<th>Price</th>' +
                            '<th>Quantity</th>' +
                            '<th>Total</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr>' +
                        '<td>test product 1</td>' +
                        '<td>$2.30</td>' +
                        '<td>2</td>' + 
                        '<td>$4.60</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>test product 2</td>' +
                        '<td>$1.23</td>' +
                        '<td>3</td>' +
                        '<td>$3.69</td>' + 
                    '</tr>' +
                '</tbody>' +
                '<tfoot>' +
                    '<tr>' +
                    // eslint-disable-next-line no-useless-escape
                        '<td colspan=\"3\">Grand Total:</td>' +
                        '<td>$8.29</td>' +
                    '</tr>' +
                '</tfoot>' +
                '</table>';
    const actual = renderTable(testCart, testProducts, 'Test Items').outerHTML;
    expect.equal(actual, expected);
});