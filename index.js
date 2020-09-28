//here I add code to export some of the functions as part of an object


const lastElements = require('./lastElements');
const middleElement = require('./middleValue');
const arrayEqual = require('./arrayEquality');
const assertArraysEq = require('./assertArrEq');
const assertFunc = require('./assertionApp');
const countsOnly = require('./countOnly');
const assertObjectEq = require('./eqObject');
const eqObjects = require('./eqObject');
const findKeyByValue = require('./findKeyByValue');
const meowsFinder = require('./findKeys');
const main = require('./firstElement');
const mapFunction = require('./map');


module.exports = {
    
    lastElements,
    middleElement,
    arrayEqual,
    assertArraysEq,
    assertFunc,
    countsOnly,
    assertObjectEq,
    eqObjects,
    findKeyByValue,
    meowsFinder,
    main,
    mapFunction,
};
