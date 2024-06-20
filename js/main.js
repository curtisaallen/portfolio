$(document).ready(function() {
    $('.scroll').click(function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      var offset = $('#' + target).offset().top;
      $('html, body').animate({
        scrollTop: offset
      }, 800); // Adjust scroll speed here (milliseconds)
    });
    var currentYear = new Date().getFullYear();
    $('#currentYear').html(currentYear)
  });