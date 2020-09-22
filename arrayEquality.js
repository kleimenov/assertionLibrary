let arrayActual = [1,2,3];
let arrayEqualToActual = [1,2,3];
let arrNewI = ['1', '2', '3'];
let arrNewII = ['1', '2', 3];

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

console.log(arrayEqual(arrNewI, arrNewII));



