
const assertFunc = require('./assertionApp')

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

module.exports ={countsOnly};



