
const assertFunc = function(actualValue, expectedValue){
    let successMessage = `Assertion passed: ${actualValue}  === ${expectedValue}`;
    let failedMessage = `Assertion failed: ${actualValue}  !== ${expectedValue}`;
    return actualValue === expectedValue ? console.log(successMessage) : console.log(failedMessage);
}


module.exports = {assertFunc};

