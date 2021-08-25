import { calcItemTotal, calcOrderTotal, findById } from '../utils.js';

const test = QUnit.test;

const testCartData = [
    {
        id: 777,
        quantity: '2'
    },
    {
        id: 888,
        quantity: '2'
    },
    {
        id: 999,
        quantity: '2'
    }
];

const testProducts = [
    {
        id: 777,
        price: 1
    },
    {
        id: 888,
        price: 2
    },
    {
        id: 999,
        price: 3
    }
];

test('findById should accept an array of objects and an id and return the corresponding object', expect => {
    const expected = testCartData[0];
    const actual = findById(testCartData, 777);
    expect.deepEqual(actual, expected);
});

test('findById should return null if it can\'t find the object', expect => {
    const expected = null;
    const actual = findById(testCartData, 123);
    expect.equal(actual, expected);
});

test('calcItemTotal should take quantity=5 and price=10 and return "$50.00"', expect => {
    const expected = '$50.00';
    const actual = calcItemTotal(5, 10);
    expect.equal(actual, expected);
});

test('calcOrderTotal should return correct order total in en-US USD format', expect => {
    const expected = '$12.00';
    const actual = calcOrderTotal(testCartData, testProducts);
    expect.equal(actual, expected);
});
