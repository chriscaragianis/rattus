
var rattus = {
    agit : [false, false, false, false, false],
    agitate : function(direction) {
      var index = Math.floor(Math.random() * 5);
      var origin = index;
      do {
        if ((agit[index] && direction) || (!agit[index] && !direction)) {
          index = (index + 1) % agitDim;
        } else {
          agit[index] = direction;
          return;
        }
      } while (index != origin);
    },
    interpret : function(input) {
      var norm = 0;
      for (var v in input) {
        norm += Math.abs(v);
      }
      if (norm % 1 < 0.5) {
        agitate(true);
      } else if (norm % 1 < 0.65) {
        agitate(false);
      }
    }
}
