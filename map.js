const words = ['cat', 'HHCD', 'house', 'rain', 'wierd'];

/*
const callback = function(arr, element) {
    //console.log(arr);
    return arr.push(element)
}

const mapFunction = function(arr, callback) {
    let newArray = [];
    for (let element of arr) {
        callback(newArray, element) //callback
    }
    return newArray;
}

const result = mapFunction(words, callback)

console.log(result)
*/

const mapFunction = function(arr, callback) {
    let newArray = [];
    for (let element of arr) {
        newArray.push(callback(element))//callback
    }
    return newArray;
}

const resultI = mapFunction(words, word => word[0]);

console.log(resultI)