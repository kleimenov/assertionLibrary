//here I add code to export some of the functions as part of an object


const lastElements = require('./lastElements');
const middleValue = require('./middleValue');
const arrayEqual = require('./arrayEquality');
const assertArrEq = require('./assertArrEq');
const assertFunc = require('./assertionApp');
const countsOnly = require('./countOnly');
const assertObjectEq = require('./eqObject');
const eqObjects = require('./eqObject');
const findKeyByValue = require('./findKeyByValue');
const meowsFinder = require('./findKeys');
const main = require('./firstElement');
const mapFunction = require('./mapFunction');


module.exports = {
    
    lastElements,
    middleValue,
    arrayEqual,
    assertArrEq,
    assertFunc,
    countsOnly,
    assertObjectEq,
    eqObjects,
    findKeyByValue,
    meowsFinder,
    main,
    mapFunction,
};
