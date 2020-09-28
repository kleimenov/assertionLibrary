const eqObjects = require('./eqObjects');

const assertObjectEq = function(firstObject, secondObject){

    //function take two values, compare this values and 
    //return true if values are equal otherwise return false
    
    let successMessage = `Assertion passed: ${firstObject}  === ${secondObject}`;
    let failedMessage = `Assertion failed: ${firstObject}  !== ${secondObject}`;
    return eqObjects(firstObject, secondObject) ? console.log(successMessage) : console.log(failedMessage);
}

module.exports = assertObjectEq;