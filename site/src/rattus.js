const agitDim = 5;
var agit = [false, false, false, false, false];
var getAgit = function() {return agit;};

var reset = function () {
  agit = [];
  for (var i = 0; i < agitDim; i += 1) {
    agit.push(false);
  }
}

var agitate = function(direction) {
  var index = Math.floor(Math.random() * agitDim);
  var origin = index;
  do {
    if ((agit[index] && direction) || (!agit[index] && !direction)) {
      index = (index + 1) % agitDim;
    } else {
      agit[index] = direction;
      return;
    }
  } while (index != origin);
};

var interpret = function(input) {
  var norm = 0;
  for (var v in input) {
    norm += Math.abs(v);
  }
  if (norm % 1 < 0.5) {
    agitate(true);
  } else if (norm % 1 < 0.65) {
      agitate(false);
    }
};

/*
module.exports = {
  getAgit: getAgit,
  agitate: agitate,
  interpret: interpret,
  reset: reset
}
*/
