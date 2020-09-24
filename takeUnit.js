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
    let successMessage = `Assertion passed: ${firstArray}  === ${secondArray}`;
    let failedMessage = `Assertion failed: ${firstArray}  !== ${secondArray}`;
    return arrayEqual(firstArray, secondArray) ? console.log(successMessage) : console.log(failedMessage);
}

let array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let array2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(arr, callback) {
    let newArray = [];
    for (let element of arr) {
        if (callback(element)) {
            return newArray;
        }
        else{
            newArray.push(element); 
        }
        
    }
    return newArray;
}

const resultI = takeUntil(array, x => x < 0); //
const resultII = takeUntil(array2, x => x === ',')

console.log(resultI)
console.log(resultII)


assertArraysEq(resultI, [ 1, 2, 5, 7 ])
assertArraysEq(resultII, [ "I've", 'been', 'to', 'Hollywood' ])