const assertObjectEq = function(firstObject, secondObject){

    //function take two values, compare this values and 
    //return true if values are equal otherwise return false
    
    let successMessage = `Assertion passed: ${firstObject}  === ${secondObject}`;
    let failedMessage = `Assertion failed: ${firstObject}  !== ${secondObject}`;
    return eqObjects(firstObject, secondObject) ? console.log(successMessage) : console.log(failedMessage);
}

const arrayEqual = function(actualValue, expectedValue){

    //function take two arrays, compare arrays and 
    //return true if arrays are equal otherwise return false
    
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

const eqObjects = function(objectI, objectII) {

    //function take two objects as input and compare them.
    //function compare keys and values and if kays-values are equall return true,
    //otherwise false.

    if (Object.keys(objectI).length !== Object.keys(objectII).length) {
        return false;
    }
    for (let key in objectI) {
        if (!objectII.hasOwnProperty(key)) {
            return false;
        }
        if (Array.isArray(objectI[key])) {
            return arrayEqual(objectI[key], objectII[key])
        }
        if (objectII[key] !== objectI[key]) {
            return false;
        }
    }
    return true;
}


const ab = {a:1, b:2, c:3, f: ['Hyi', "zaebis", 'poHyi']};
const ba = {b:2, a:1, c:3, f: ['Hyi', "zaebis", 'poHyi']};

assertObjectEq(ab, ba)
console.log(eqObjects(ab, ba))
