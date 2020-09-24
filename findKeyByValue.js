const assertFunc = function(actualValue, expectedValue){
    let successMessage = `Assertion passed: ${actualValue}  === ${expectedValue}`;
    let failedMessage = `Assertion failed: ${actualValue}  !== ${expectedValue}`;
    return actualValue === expectedValue ? console.log(successMessage) : console.log(failedMessage);
}

const films = {
    scienceFiction: 'Inception',
    comedy: 'Hyi',
    drama: 'Night',
}

const findKeyByValue = function(object, value) {
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
}


assertFunc(findKeyByValue(films, 'Night'), 'drama')