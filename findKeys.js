const assertFunc = require('./assertionApp');

const meowsFinder = function(object, callback) {
    for (let key in object) {
        //console.log(callback(object[key]), key)
        if(callback(object[key])) {
            //console.log(key)
            return key;
        }
    }
}

module.exports = {meowsFinder};