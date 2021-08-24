//Returns an object with the provided id, or undefined if not found.
export function findById(arrayOfObjects, id) {
    for (let object of arrayOfObjects) {
        if (object.id === id) {
            return object;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return quantity * price;
}