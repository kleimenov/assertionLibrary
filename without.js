const arrayEqual = require('./arrayEquality');
const assertArraysEq = require('./assertArrEq');

const unwantedElement = function(array, valuesToDelete) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < valuesToDelete.length; j++) {
            if (array[index] === valuesToDelete[j]) {
                array.splice(index, 1);
            }
        }
    }
    return array;
}
