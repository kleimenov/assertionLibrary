const assertObjectEq = function(firstObject, secondObject){

    //function take two values, compare this values and 
    //return true if values are equal otherwise return false
    
    let successMessage = `Assertion passed: ${firstObject}  === ${secondObject}`;
    let failedMessage = `Assertion failed: ${firstObject}  !== ${secondObject}`;
    return eqObjects(firstObject, secondObject) ? console.log(successMessage) : console.log(failedMessage);
}

const arrayEqual = require('./arrayEquality');

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

