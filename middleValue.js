
const arrayEqual = require('./arrayEquality');
const assertArraysEq = require('./assertArrEq');

const middleElement = function(arr) {
    let tmpArr = []
    let length = arr.length;
    if (length > 2) {
        if (length%2 === 0) {
            let arrMidIndex = length / 2; [0,1,2,3];
            tmpArr.push(arr[arrMidIndex - 1], arr[arrMidIndex])
            return tmpArr;
           }
        if (length%2 !== 0) {
            let arrMidIndex = Math.floor(length / 2); 
            tmpArr.push(arr[arrMidIndex])
            return tmpArr;
        }
    }
    else {
        return tmpArr;
    }

}
module.exports = {middleElement};