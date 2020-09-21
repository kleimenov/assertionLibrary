
//discover console.assert library

//define function that return sum of two numbers
const sumOfNumbers = function(x, y) {
    return x + y;
}

//define function that return sum of two numbers
const multOfnumbers = function(x, y) {
    return x * y;
}

//define handful of variables
let numberOne = 6;
let numberTwo = 6;
let randomValue = 6;

//test our code
console.assert(sumOfNumbers(numberOne, numberTwo) === sumOfNumbers(numberOne, numberTwo));
console.assert(sumOfNumbers(numberOne, numberTwo) === sumOfNumbers(numberOne, numberTwo) - randomValue);
console.assert(multOfnumbers(numberOne, numberTwo) === multOfnumbers(numberOne, numberTwo));
console.assert(multOfnumbers(numberOne, numberTwo) === multOfnumbers(numberOne, numberTwo) + randomValue);