
const arrayEqual = require('./arrayEquality');
const assertArraysEq = require('./assertArrEq');

const takeUntil = function(arr, callback) {
    let newArray = [];
    for (let element of arr) {
        if (callback(element)) {
            return newArray;
        }
        else{
            newArray.push(element); 
        }
        
    }
    return newArray;
}

module.exports = {takeUntil};