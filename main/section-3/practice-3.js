'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let sameElementCount = countSameElements(collectionA);
    updatedCollection(sameElementCount, objectB);

    return sameElementCount;
}

function updatedCollection(collectionA, objectB) {
    let objectBValues = objectB.value;

    collectionA.map(element => {
        if (objectBValues.includes(element.key))
            if (element.count >= 3) element.count -= parseInt(element.count / 3);
    });

    return collectionA;
}

function countSameElements(collection) {
    let sameElementCount = [];

    collection.map(key => {
        let keyIndex = findContainsKeyIndex(sameElementCount, key);
        if (keyIndex !== -1) addKeyCount(sameElementCount, keyIndex);
        else sameElementCount.push(createObj(key));
    });

    return sameElementCount;
}

function findContainsKeyIndex(sameElementCount, key) {
    return sameElementCount.findIndex(element => element.key === key);
}

function addKeyCount(sameElementCount, keyIndex) {
    sameElementCount[keyIndex].count += 1;
}

function createObj(key) {
    return { key: key, count: 1 };
}
