//var rattus = require("js");
var updateRat = function() {
  $('li').each(function(index) {
    if (getAgit()[index]) {
      $(this).css('color', 'red');
    } else {
      $(this).css('color', 'green');
    }
  });
};

$('input').click(function() {
  if ($(this).hasClass('up')) {
    agitate(true);
  }
  if ($(this).hasClass('down')) {
    agitate(false);
  }
  updateRat();
});
