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

const unwantedElement = function(array, valuesToDelete) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < valuesToDelete.length; j++) {
            if (array[index] === valuesToDelete[j]) {
                array.splice(index, 1);
            }
        }
    }
    return array;
}


assertArraysEq(unwantedElement([1,2,3], [1,2,'3']), [3]);