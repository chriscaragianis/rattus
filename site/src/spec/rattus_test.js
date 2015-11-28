var assert = require("assert");
var rattus = require("../rattus.js");

const agitDim = 5;

var countTrues = function(arr) {
  var count = 0;
  for (v in arr){
    if (v) {
      count += 1;
    }
  }
  return count;
}

describe ("new rattus is empty", function () {
  it ("should be empty on reset", function () {
    rattus.reset();
    assert.equal(0, countTrues(rattus.agit));
  })
})
