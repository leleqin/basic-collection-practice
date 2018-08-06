'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = collectionA.filter(item => objectB.value.includes(item));
  return result;
}
