
const arrayEqual = require('./arrayEqual');
const assertArraysEq = require('./assertArraysEq');

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

module.exports = lettersIndexes;