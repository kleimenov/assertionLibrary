
const arrayEqual = require('./arrayEquality');
const assertArraysEq = require('./assertArrEq');

const lettersIndexes = function(sentence) {
    const result = {};
    for (let index in sentence) {
        if (!result[sentence[index]]) {
            result[sentence[index]] = [];
        }
        result[sentence[index]].push(Number(index));
    }
    return result;
   
}
