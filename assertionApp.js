//Write assertion function

const assertFunc = function(actualValue, expectedValue){
    return actualValue === expectedValue ? console.log("Good job") : console.log("Bad you");
};

assertFunc('cat', 'HHCDcat');
assertFunc(20, 20);

assertFunc('909', '909')