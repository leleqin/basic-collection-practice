'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.map(item => {
        if (objectB.value.includes(item.key)){
            item.count--;
        }
    });
return collectionA;
}
