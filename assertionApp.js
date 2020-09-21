//Write assertion function assertFunc()

const assertFunc = function(actualValue, expectedValue){
    return actualValue === expectedValue ? console.log("Good job") : console.log("Bad you");
};

assertFunc('cat', 'HHCDcat');
assertFunc(20, 20);

assertFunc('909', '909')

//make refactoring assertFunc()

const assertFunc = function(actualValue, expectedValue) {
    const assertionPassed = "Assertion passed: " + actualValue + " === " + expectedValue;
    const assertionFailed = "Assertion failed: " + actualValue + " !== " + expectedValue;
    return actualValue === expectedValue ? console.log(assertionPassed) : console.log(assertionFailed);
}

assertFunc('909', '909')

