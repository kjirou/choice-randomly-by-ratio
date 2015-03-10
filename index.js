/**
 * Find a value randomly from collection by ratio
 *
 * @example
 *
 *   (['x', 1], ['y', 1.5], ['z', 2])
 *
 *     or
 *
 *   ({x: 1, y: 1.5, z: 2})
 *
 *     -> x:2, y:3, z:4
 *
 * @param {object|Array} collection A collection of value with ratio
 * @return choiced value
 */
module.exports = function findRandomlyByRatio(collection) {
  if (!Array.isArray(collection)) {
    var collection_ = [];
    for (var k in collection) {
      collection_.push([k, collection[k]]);
    }
    collection = collection_;
  }

  var totalRatio = 0;
  collection.forEach(function(v) {
    totalRatio += parseFloat(v[1]);
  });

  if (totalRatio <= 0 || isNaN(totalRatio)) {
    throw new Error('findRandomlyByRatio was given invalid collection');
  }

  var roll = Math.random() * totalRatio;

  var summing = 0;
  for (var i = 0; i < collection.length; i++) {
    summing += collection[i][1];
    if (roll < summing) {
      return collection[i][0];
    }
  }
};
