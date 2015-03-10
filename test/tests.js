var assert = require('assert');
var sinon = require('sinon');

var chooseRandomlyByRatio = require('../index');


describe('choose-randomly-by-ratio', function() {

  var createValueGenerator = function createValueGenerator(values) {
    var currentIdx = -1;
    return function() {
      currentIdx = (currentIdx + 1) % values.length;
      return values[currentIdx];
    };
  };


  beforeEach(function() {
    this.mocks = [];
  });

  afterEach(function() {
    (this.mocks || []).forEach(function(mock) {
      mock.restore();
    });
  });


  it('createValueGenerator', function() {
    var generator = createValueGenerator([0.2, 0.5, 0.8]);
    assert.strictEqual(generator(), 0.2);
    assert.strictEqual(generator(), 0.5);
    assert.strictEqual(generator(), 0.8);
    assert.strictEqual(generator(), 0.2);
  });

  it('[["x", 1], ["y", 2]]', function() {
    var values = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

    this.mocks.push(sinon.stub(Math, 'random', createValueGenerator(values)));

    var results = [];
    values.forEach(function() {
      results.push(chooseRandomlyByRatio([['x', 1], ['y', 2]]));
    });

    assert.deepEqual(results, ['x', 'x', 'x', 'x', 'y', 'y', 'y', 'y', 'y', 'y']);
  });

  it('{x: 1, y: 2}', function() {
    var values = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

    this.mocks.push(sinon.stub(Math, 'random', createValueGenerator(values)));

    var results = [];
    values.forEach(function() {
      results.push(chooseRandomlyByRatio({x: 1, y: 2}));
    });

    assert.deepEqual(results, ['x', 'x', 'x', 'x', 'y', 'y', 'y', 'y', 'y', 'y']);
  });

  it('[["x", 1], ["y", 2], ["z", 3]]', function() {
    var values = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

    this.mocks.push(sinon.stub(Math, 'random', createValueGenerator(values)));

    var results = [];
    values.forEach(function() {
      results.push(chooseRandomlyByRatio([['x', 1], ['y', 2], ['z', 3]]));
    });

    assert.deepEqual(results, ['x', 'x', 'y', 'y', 'y', 'z', 'z', 'z', 'z', 'z']);
  });

  it('should throw error in invalid cases', function() {
    assert.throws(function() {
      chooseRandomlyByRatio({x: -3, y: 2});
    }, /chooseRandomlyByRatio/);

    assert.throws(function() {
      chooseRandomlyByRatio(['x', 'not_a_number']);
    }, /chooseRandomlyByRatio/);
  });
});
