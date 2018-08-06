'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = collectionA.map(item => item.key).filter(data => objectB.value.includes(data));
  return result;
}
