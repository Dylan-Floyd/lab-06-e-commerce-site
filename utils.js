//Returns an object with the provided id, or undefined if not found.
export function findById(arrayOfObjects, id) {
    for (let object of arrayOfObjects) {
        if (object.id === id) {
            return object;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return (quantity * price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function calcOrderTotal(cartData, products) {
    let total = 0;
    for (let cartItem of cartData) {
        const price = findById(products, cartItem.id).price;
        total += cartItem.quantity * price;
    }
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}