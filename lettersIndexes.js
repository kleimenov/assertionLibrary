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


const lettersIndexes = function(sentence) {
    const result = {};
    for (let index in sentence) {
        if (!result[sentence[index]]) {
            result[sentence[index]] = [];
        }
        result[sentence[index]].push(Number(index));
    }
    return result;
   
}

let text = 'Hello';
console.log(lettersIndexes(text))

assertArraysEq(lettersIndexes('hello').e, [1]);