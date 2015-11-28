//var rattus = require("js");
var updateRat = function() {
  if (getAgit()[0]) {
    $(".a1").css('color', 'red');
  } else {
    $(".a1").css('color', 'green');
  }
  if (getAgit()[1]) {
    $(".a2").css('color', 'red');
  } else {
    $(".a2").css('color', 'green');
  }
  if (getAgit()[2]) {
    $(".a3").css('color', 'red');
  } else {
    $(".a3").css('color', 'green');
  }
  if (getAgit()[3]) {
    $(".a4").css('color', 'red');
  } else {
    $(".a4").css('color', 'green');
  }
  if (getAgit()[4]) {
    $(".a5").css('color', 'red');
  } else {
    $(".a5").css('color', 'green');
  }
}

$('input').click(function() {
  if ($(this).hasClass('up')) {
    agitate(true);
  }
  if ($(this).hasClass('down')) {
    agitate(false);
  }
  updateRat();
});
