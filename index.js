//here I add code to export some of the functions as part of an object

const firstElement = require('./firstElement');
const lastElements = require('./lastElements');
const middleValue = require('./middleValue');

module.exports = {
    firstElement,
    lastElements,
    middleValue,
};
