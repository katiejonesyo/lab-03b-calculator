
const sumInput1 = document.getElementById('sum-input-1')
const sumInput2 = document.getElementById('sum-input-2')
const sumButton = document.getElementById('sum-button')
const sumSpan = document.getElementById('sum-span')

sumButton.addEventListener('click',() => {
 
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;


    const sum = value1 + value2;

 
    sumSpan.textContent = sum;
});



const differenceInput1 = document.getElementById('difference-input-1')
const differenceInput2 = document.getElementById('difference-input-2')
const differenceButton = document.getElementById('difference-button')
const differenceSpan = document.getElementById('difference-span')

differenceButton.addEventListener('click',() => {

    const value1 = differenceInput1.valueAsNumber;
    const value2 = differenceInput2.valueAsNumber;

   
    const difference = value1 - value2;


    differenceSpan.textContent = difference;
});

const productInput1 = document.getElementById('product-input-1')
const productInput2 = document.getElementById('product-input-2')
const productButton = document.getElementById('product-button')
const productSpan = document.getElementById('product-span')

productButton.addEventListener('click',() => {

    const value1 = productInput1.valueAsNumber;
    const value2 = productInput2.valueAsNumber;

    const product = value1 * value2;

    productSpan.textContent = product;
});



const quotientInput1 = document.getElementById('quotient-input-1')
const quotientInput2 = document.getElementById('quotient-input-2')
const quotientButton = document.getElementById('quotient-button')
const quotientSpan = document.getElementById('quotient-span')

quotientButton.addEventListener('click',() => {

    const value1 = quotientInput1.valueAsNumber;
    const value2 = quotientInput2.valueAsNumber;


    const quotient = value1 / value2;

    
    quotientSpan.textContent = quotient;
});