const assertObjectEq = function(firstObject, secondObject){
    let successMessage = `Assertion passed: ${firstObject}  === ${secondObject}`;
    let failedMessage = `Assertion failed: ${firstObject}  !== ${secondObject}`;
    return eqObjects(firstObject, secondObject) ? console.log(successMessage) : console.log(failedMessage);
}


const eqObjects = function(objectI, objectII) {
    if (Object.keys(objectI).length !== Object.keys(objectII).length) {
        return false;
    }
    for (let key in objectI) {
        if (!objectII.hasOwnProperty(key)) {
            return false;
        }
        if (objectII[key] !== objectI[key]) {
            return false;
        }
    }
    return true;
}




const ab = {a:1, b:2, c:3, f:3};
const ba = {b:2, a:1, c:3};

//console.log(eqObjects(ab, ba))

assertObjectEq(ab, ba)