const arrayEqual = require('./arrayEquality');
//const assertFunc = require('./assertionApp');


const assertArraysEq = function(firstArray, secondArray){
    let successMessage = `Assertion passed: ${firstArray}  === ${secondArray}`;
    let failedMessage = `Assertion failed: ${firstArray}  !== ${secondArray}`;
    return arrayEqual(firstArray, secondArray) ? console.log(successMessage) : console.log(failedMessage);
}

let arrNewI = ['1', '2', '3'];
let arrNewII = ['1', '2'];


//assertArraysEq(arrNewI, arrNewII);

module.exports = assertArraysEq;