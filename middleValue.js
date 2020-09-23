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


const middleElement = function(arr) {
    let tmpArr = []
    let length = arr.length;
    if (length > 2) {
        if (length%2 === 0) {
            let arrMidIndex = length / 2; [0,1,2,3];
            tmpArr.push(arr[arrMidIndex - 1], arr[arrMidIndex])
            return tmpArr;
           }
        if (length%2 !== 0) {
            let arrMidIndex = Math.floor(length / 2); 
            tmpArr.push(arr[arrMidIndex])
            return tmpArr;
        }
    }
    else {
        return tmpArr;
    }

}

//console.log(middleElement([2,3]))

assertArraysEq(middleElement([2,3,4,5]), [3,4])