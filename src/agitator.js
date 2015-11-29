var inter;
var agitActions = [
  function(index) {
    var pics = [  "img/rat1.png",
                  "img/rat2.png",
                  "img/rat3.png",
                  "img/rat4.png",
                  "img/rat5.png"];
    var count = 0;
    if (agit[index]) {
      clearInterval(inter);
      inter = setInterval(function() {
        $('#rat').attr('src', pics[count]);
        count = (count + 1) % pics.length;
      }, 100);
    } else {
      clearInterval(inter);
      $('#rat').attr('src', pics[0]);
    }
  },
  function(index) {
    if (agit[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (agit[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (agit[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (agit[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  }
]

var updateRat = function() {
  for (var v in agitActions) {
    agitActions[v](v);
  }
};

$('input[type="button"]').click(function() {
  interpret([parseFloat($('.norm').val())]);
  updateRat();
});
