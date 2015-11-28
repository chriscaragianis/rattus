var assert = require("assert");
var rattus = require("../rattus.js");

const agitDim = 5;

var countTrues = function(arr) {
  var count = 0;
  for (v in arr) {
    if (arr[v]) {
      count += 1;
    }
  }
  return count;
}

describe ("Getting the rattus", function() {
  it ("should be empty on reset", function() {
    rattus.reset();
    assert.equal(0, countTrues(rattus.getAgit()));
  });
  it ("should be the right size", function() {
    assert.equal(agitDim, rattus.getAgit().length);
  })
});

describe ("Agitates properly", function() {
  it ("should agitate empty agit down to empty agit", function() {
    rattus.reset();
    rattus.agitate(false);
    assert.equal(0, countTrues(rattus.getAgit()));
  });
  it ("should agitate empty agit up to one true", function() {
    rattus.agitate(true);
    assert.equal(1, countTrues(rattus.getAgit()));
  });
  it ("should agitate one true down to empty", function() {
    rattus.agitate(false);
    assert.equal(0, countTrues(rattus.getAgit()));
  });
  it ("should agitate full array up to full array", function() {
    for (v in rattus.getAgit()) {
      rattus.agitate(true);
    }
    assert.equal(agitDim, countTrues(rattus.getAgit()));
    rattus.agitate(true);
    assert.equal(agitDim, countTrues(rattus.getAgit()));
  })
});
