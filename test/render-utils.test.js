// IMPORT MODULES under test here:
import { renderProduct } from '../products/render-utils.js';
import { products } from '../data/product-data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected =
        // eslint-disable-next-line no-useless-escape
        '<li id=\"123\" class="cat">' +
            '<img src="../assets/tony-the-tiger.jpg">' +
            '<div class="col">' +
                '<div class="row">' +
                    '<h3>Tony the Tiger</h3>' +
                    '<div class="row">' +
                        '<span class="price-span">Price: $400,000,000.00</span>' +
                        '<button>Buy Now</button>' +
                    '</div>' +
                '</div>' +
                '<p>Tony the Tiger is looking for a loving home after the bankruptcy of Kellogg\'s. Good with kids, other cats, and dogs. Mildy in the uncanny valley. All IP included.</p>' +
                '<span>Category: Corporate Shill Cat</span>' +
            '</div>' +
        '</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(products[0]).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
