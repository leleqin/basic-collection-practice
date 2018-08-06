'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = collectionA.filter(item => collectionB.includes(item));
  return result;
}
