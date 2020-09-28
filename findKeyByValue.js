const assertFunc = require('./assertionApp');


const findKeyByValue = function(object, value) {
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
}
