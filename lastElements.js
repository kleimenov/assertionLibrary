//refactored previous code removed assertFunc, add assertFunc as export from assertionApp.js file
const assertFunc = require(`./assertionApp`)

let array = [5, 4, 6];

const lastElements = function(arr){
   return array.slice(1);
}


assertFunc(lastElements(array), array);
assertFunc(array.length, 3);


