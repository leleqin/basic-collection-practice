'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.map(item => {
    if (objectB.value.includes(item.key) && item.count >= 3){
        item.count -= Math.floor(item.count / 3);
    }
  });
    return collectionA;
}
