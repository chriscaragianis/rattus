var colorInterval;
var positionInterval;
var positionTimeout;
var top = $('#rat').css('top');
var left = $('#rat').css('left');
var agitActions = [
  function(index) {
    var pics = [  "img/rat1.png",
                  "img/rat2.png",
                  "img/rat3.png",
                  "img/rat4.png",
                  "img/rat5.png"];
    var count = 0;
    if (agit[index]) {
      clearInterval(colorInterval);
      colorInterval = setInterval(function() {
        $('#rat').attr('src', pics[count]);
        count = (count + 1) % pics.length;
      }, 100);
    } else {
      clearInterval(colorInterval);
      $('#rat').attr('src', pics[0]);
    }
  },
  function(index) {
    if (agit[index]) {
      $('#caption').css('display', 'block');
    } else {
      $('#caption').css('display', 'none');
    }
  },
  function(index) {
    if (agit[index]) {
      clearInterval(positionInterval);
      positionInterval = setInterval(function() {
        var up = (Math.random() * 16) - 8;
        var left = (Math.random() * 16) - 8;
        $('#rat').css('transform', 'translate(' + up + 'px, ' + left +'px)');
        positionTimeout = setTimeout(function() {
        $('#rat').css('transform', 'translate(0,0)');
      }, 70);
    }, 140);
    } else {
      clearInterval(positionInterval);
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
