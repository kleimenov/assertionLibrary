//here I add code to export some of the functions as part of an object

const arrayEqual = require('./arrayEqual');
const assertArraysEq = require('./assertArraysEq');
const assertFunc = require('./assertFunc');
const assertObjectEq = require('./assertObjectEq');
const countsOnly = require('./countsOnly');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const firstElement = require('./firstElement');
const middleElement = require('./middleElement');
const lastElements = require('./lastElements');
const lettersCount = require('./lettersCount');
const lettersIndexes = require('./lettersIndexes');
const mapFunction = require('./mapFunction');
const meowsFinder = require('./meowsFinder');
const takeUntil = require('./takeUntil');
const unwantedElement = require('./unwantedElement');

module.exports = {
    arrayEqual,
    assertArraysEq,
    assertFunc,
    assertObjectEq, 
    countsOnly,
    eqObjects,
    findKeyByValue, 
    firstElement,
    middleElement,
    lastElements,
    lettersCount,
    lettersIndexes,
    mapFunction,
    meowsFinder,
    takeUntil,
    unwantedElement
}