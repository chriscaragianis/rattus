var countTrues = function(arr) {
  var count = 0;
  for (var v in arr) {
    if (arr[v]) {
      count += 1;
    }
  }
  return count;
}

describe ("Getting the rattus", function() {
  it ("should be empty on reset", function() {
    reset();
    expect(countTrues(getAgit())).to.equal(0);
  });
  it ("should be the right size", function() {
    expect(getAgit().length).to.equal(agitDim);
  })
});

describe ("Agitates properly", function() {
  it ("should agitate empty agit down to empty agit", function() {
    reset();
    agitate(false);
    expect(countTrues(getAgit())).to.equal(0);
  });
  it ("should agitate empty agit up to one true", function() {
    agitate(true);
    expect(countTrues(getAgit())).to.equal(1);
  });
  it ("should agitate one true down to empty", function() {
    agitate(false);
    expect(countTrues(getAgit())).to.equal(0);
  });
  it ("should agitate full array up to full array", function() {
    for (var v in getAgit()) {
      agitate(true);
    }
    expect(countTrues(getAgit())).to.equal(agitDim);
    agitate(true);
    expect(countTrues(getAgit())).to.equal(agitDim);
  })
});
