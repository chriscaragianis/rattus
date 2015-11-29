var agitActions = [
  function(index) {
    if (getAgit()[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (getAgit()[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (getAgit()[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (getAgit()[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  },
  function(index) {
    if (getAgit()[index]) {
      $($('li').get(index)).css('color', 'red');
    } else {
      $($('li').get(index)).css('color', 'green');
    }
  }
]

var updateRat = function() {
  $('li').each(function(index) {
    agitActions[index](index);
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
