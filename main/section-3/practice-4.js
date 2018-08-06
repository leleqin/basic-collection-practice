'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    var index = 0;
    var sum = 0;
    while (true) {
        var count = 0;
        index = sum;
        for (var i in collectionA) {
            if (collectionA[index] === collectionA[i]) {
                count++;
            }
        }
        sum += count;
        if (collectionA[index].split("-").length === 1) {
            result.push({ key: collectionA[index], count: count });
        } else {
            result.push({
                key: collectionA[index].split("-")[0],
                count: collectionA[index].split("-")[1]
            });
        }

        if (sum >= collectionA.length) {
            break;
        }
    }

    return sub(result, objectB);
}

function sub(collection, object) {
    for (var i in collection) {
        for (var j in object.value) {
            if (collection[i].key === object.value[j]) {
                if (collection[i].count % 3 === 0) {
                    collection[i].count = collection[i].count -= collection[i].count / 3;
                } else if (collection[i].count % 3 === 1) {
                    collection[i].count = collection[i].count -=
                        (collection[i].count - 1) / 3;
                } else if (collection[i].count % 3 === 2) {
                    collection[i].count = collection[i].count -=
                        (collection[i].count - 2) / 3;
                }
            }
        }
    }

    return collection;
}
