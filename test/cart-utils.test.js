import { CAT_CART, FRUIT_CART, useFakeLocalStorage, getCart, updateCart, addToCart } from '../data/cart-utils.js';

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

test('getCart should return an empty array when there\'s no cart data in localStorage', expect => {
    useFakeLocalStorage(); //set up mock storage
    const expected = [];
    const actual = getCart(CAT_CART);
    expect.deepEqual(actual, expected);
    useFakeLocalStorage(); //resets mock storage so it doesn't affect other tests;
});

test('cart data should be the same before and after updateCart and getCart with CAT_CART', expect => {
    useFakeLocalStorage();
    const expected = testCartData;
    updateCart(CAT_CART, testCartData);
    const actual = getCart(CAT_CART);
    expect.deepEqual(actual, expected);
    useFakeLocalStorage();
});

test('cart data should be the same before and after updateCart and getCart with FRUIT_CART', expect => {
    useFakeLocalStorage();
    const expected = testCartData;
    updateCart(FRUIT_CART, testCartData);
    const actual = getCart(FRUIT_CART);
    expect.deepEqual(actual, expected);
    useFakeLocalStorage();
});

test('addToCart should add a cartItem to the cart if it wasn\'t already there', expect => {
    //I regret trying to test this stuff.
    useFakeLocalStorage();
    const expected = [
        {
            id: 1,
            quantity: 1
        }
    ];
    addToCart(CAT_CART, 1);
    const actual = getCart(CAT_CART);
    expect.deepEqual(actual, expected);
    useFakeLocalStorage();
});

test('addToCart should increment quanitity of existing cart item', expect => {
    useFakeLocalStorage();
    const expected = [
        {
            id: 1,
            quantity: 2
        }
    ];
    const setupData = [
        {
            id: 1,
            quantity: 1
        }
    ];
    updateCart(CAT_CART, setupData);
    addToCart(CAT_CART, 1);
    const actual = getCart(CAT_CART);
    expect.deepEqual(actual, expected);
    useFakeLocalStorage();
});