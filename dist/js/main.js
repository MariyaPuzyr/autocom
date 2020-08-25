"use strict";

$(document).ready(function () {
  /* move to section */
  $('.nav-link').click(function (event) {
    event.preventDefault();
    $('.nav-link').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    var headerHeight = $('.navbar-menu').innerHeight();
    var el = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(el).offset().top - headerHeight
    }, 1000);
  });
});