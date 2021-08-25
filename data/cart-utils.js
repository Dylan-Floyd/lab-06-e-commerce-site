import { findById } from '../utils.js';

export const CAT_CART = 'CAT_CART';
export const FRUIT_CART = 'FRUIT_CART';

let myLocalStorage = localStorage;

export function useFakeLocalStorage() {
    myLocalStorage = {
        keys: [],
        values: [],
        setItem: function(key, value) {
            if (typeof key !== 'string') {
                throw 'key must be a string';
            }
            for (let i = 0; i < this.keys.length; i++) {
                if (this.keys[i] === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            this.values.push(value.toString());
        },
        getItem: function(key) {
            for (let i = 0; i < this.keys.length; i++) {
                if (this.keys[i] === key) {
                    return this.values[i];
                }
            }
        }
    };
}

export function getCart(cartSpecifier) {
    if (cartSpecifier !== CAT_CART && cartSpecifier !== FRUIT_CART) {
        throw 'Invalid cartSpecifier supplied';
    }
    let cart = myLocalStorage.getItem(cartSpecifier);
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    return cart;
}

export function updateCart(cartSpecifier, cartData) {
    //WET because javascript doesn't have a nice way to bubble up errors.
    //this would just turn into try { func } catch (e) { throw e } if
    //this was turned into its own function.
    if (cartSpecifier !== CAT_CART && cartSpecifier !== FRUIT_CART) {
        throw 'Invalid cartSpecifier supplied';
    }
    if (!Array.isArray(cartData)) {
        throw 'Invalid cartData supplied';
    }
    let stringyCart = JSON.stringify(cartData);
    myLocalStorage.setItem(cartSpecifier, stringyCart);
}

export function addToCart(cartSpecifier, productId) {
    let cartData = getCart(cartSpecifier);
    let cartItem = findById(cartData, productId);
    if (!cartItem) {
        cartItem = { id: productId, quantity: 1 };
        cartData.push(cartItem);
    } else {
        cartItem.quantity++;
    }
    updateCart(cartSpecifier, cartData);
}