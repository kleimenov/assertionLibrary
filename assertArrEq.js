
const arrayEqual = function(actualValue, expectedValue){
    if(actualValue.length === expectedValue.length){
        for (let index = 0; index < actualValue.length; index++){
            if (actualValue[index] !== expectedValue[index]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const assertArraysEq = function(firstArray, secondArray){
    return arrayEqual(firstArray, secondArray) ? console.log(`Assertion passed: ${firstArray}  === ${secondArray}`) : console.log(`Assertion failed: ${firstArray}  !== ${secondArray}`);
}

let arrNewI = ['1', '2', '3'];
let arrNewII = ['1', '2'];

assertArraysEq(arrNewI, arrNewII);