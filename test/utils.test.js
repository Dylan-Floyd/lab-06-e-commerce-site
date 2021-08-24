import { calcItemTotal, findById } from '../utils.js';

const test = QUnit.test;

const testData = [
    {
        id: 777,
        dummyProp: 'asdf'
    },
    {
        id: 888,
        dummyProp: 'asdf'
    },
    {
        id: 999,
        dummyProp: 'asdf'
    }
];

test('findById should accept an array of objects and an id and return the corresponding object', expect => {
    const expected = testData[0];
    const actual = findById(testData, 777);
    expect.deepEqual(actual, expected);
});

test('findById should return null if it can\'t find the object', expect => {
    const expected = null;
    const actual = findById(testData, 123);
    expect.equal(actual, expected);
});

test('calcItemTotal should take quantity=5 and price=10 and return 50', expect => {
    const expected = 50;
    const actual = calcItemTotal(5, 10);
    expect.equal(actual, expected);
});