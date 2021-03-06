'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    let elem = {};
    for (let item of collection) {
        if (item.split("").length === 1) {
            elem[item] === undefined ? (elem[item] = 1) : elem[item]++;
        } else {
            let num = Number(item.match(/\d{1,2}/));
            let word = item.match(/\w/);
            elem[word] === undefined ? (elem[word] = num) : (elem[word] += num);
        }
    }

    for (let item of Object.keys(elem)) {
        result.push({ name: item, summary: elem[item] });
    }

    return result;
}
