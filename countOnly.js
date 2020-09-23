const assertFunc = function(actualValue, expectedValue){
    let successMessage = `Assertion passed: ${actualValue}  === ${expectedValue}`;
    let failedMessage = `Assertion failed: ${actualValue}  !== ${expectedValue}`;
    return actualValue === expectedValue ? console.log(successMessage) : console.log(failedMessage);
}


const countsOnly = function(allItems, itemsToCount) {
    let itemsStats = {};
    for (let item of allItems) {
       if (itemsToCount[item]) {
           //itemsStats[item] ? itemsStats[item]++ : itemsStats[item] = 1;
           itemsStats[item] = ++itemsStats[item] || 1;
       }
    }
    return itemsStats;
}


const firstNames = [
    'Karl', 'Salima', 'Aguahanna', 'Fang', 'Fang', 'Jason', 'Salima', 'Joe', 'Fong', 'Salima',
]

const listOfNames = {'Jason': true, 'Karima': true, 'Fong': true, 'Salima': true, 'Aguahanna': false,};
const resultI = countsOnly(firstNames, listOfNames);

console.log(resultI);

assertFunc(resultI['Salima'], undefined)