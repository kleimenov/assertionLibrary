const assertFunc = require('./assertionApp');

const lettersCount = function(text) {
    let numberOfletters = {};
    for (let letter of text) {
        numberOfletters[letter] = ++numberOfletters[letter] || 1;
    }
    return numberOfletters;
}


