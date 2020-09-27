
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from '../mathUtils.js';
const test = QUnit.test;


test('add should take in 7 and 3 and return 10', (expect) => {
    
    const argument1 = 7;
    const argument2 = 3;
    const expected = 10;
    const actual = addNumbers(argument1, argument2);
    expect.equal(actual, expected);
});


test('subtract should take 5 and 1 and return 4', (expect) => {

    const argument1 = 5;
    const argument2 = 1;
    const expected = 4;
  
    const actual = subtractNumbers(argument1, argument2);

    
    expect.equal(actual, expected);
}); 


test('multiply should take 5 and 2 and return 10', (expect) => {

    const argument1 = 5;
    const argument2 = 2;
    const expected = 10;
  
    const actual = multiplyNumbers(argument1, argument2);

    
    expect.equal(actual, expected);
}); 


test('divide should take 12 and 4 and return 3', (expect) => {

    const argument1 = 12;
    const argument2 = 4;
    const expected = 3;
  
    const actual = divideNumbers(argument1, argument2);

    
    expect.equal(actual, expected);
}); 