
const mapFunction = function(arr, callback) {
    let newArray = [];
    for (let element of arr) {
        newArray.push(callback(element))//callback
    }
    return newArray;
}

module.exports = {mapFunction};