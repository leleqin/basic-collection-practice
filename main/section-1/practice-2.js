'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = collectionA.filter(item => collectionB[0].includes(item));
  return result;
}
