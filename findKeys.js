const assertFunc = function(actualValue, expectedValue){
    let successMessage = `Assertion passed: ${actualValue}  === ${expectedValue}`;
    let failedMessage = `Assertion failed: ${actualValue}  !== ${expectedValue}`;
    return actualValue === expectedValue ? console.log(successMessage) : console.log(failedMessage);
}

const meows = {
    'Tommy' : {meows: 1},
    'Saitan' : {meows: 666},
    'HHCD' : {meows: 969},
    'Nancy' : {meows: 3},
    'Unknown cat' : {meows: 5},
}

const meowsFinder = function(object, callback) {
    for (let key in object) {
        //console.log(callback(object[key]), key)
        if(callback(object[key])) {
            //console.log(key)
            return key;
        }
    }
}

const result  = meowsFinder(meows, x => x.meows === 666);
assertFunc(result, 'Saitan')