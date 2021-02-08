// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findObjectKeys } from '../Objects/object-utils.js';

const test = QUnit.test;

test('the findOjectKeys function should return only the keys of the object', (expect) => {
    
    const expected = 'The keys of this object are: apple,banana,strawberry.';
   
    const actual = findObjectKeys();

    expect.equal(actual, expected);
});
