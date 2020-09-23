const assertFunc = function(actualValue, expectedValue){
    let successMessage = `Assertion passed: ${actualValue}  === ${expectedValue}`;
    let failedMessage = `Assertion failed: ${actualValue}  !== ${expectedValue}`;
    return actualValue === expectedValue ? console.log(successMessage) : console.log(failedMessage);
}

const lettersCount = function(text) {
    let numberOfletters = {};
    for (let letter of text) {
        numberOfletters[letter] = ++numberOfletters[letter] || 1;
    }
    return numberOfletters;
}

const resultII = lettersCount('LHL');

assertFunc(resultII.L, 2)

