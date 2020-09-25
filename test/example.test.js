
import { add, subtract } from '../mathUtils.js';
const test = QUnit.test;


test('add should take in 7 and 3 and return 10', (expect) => {
    
    const argument1 = 7;
    const argument2 = 3;
    const expected = 10;
    const actual = add(argument1, argument2);
    expect.equal(actual, expected);
});


test('subtract should take 5 and 1 and return 4', (expect) => {

    const argument1 = 5;
    const argument2 = 1;
    const expected = 4;
  
    const actual = subtract(argument1, argument2);

    
    expect.equal(actual, expected);
}); 