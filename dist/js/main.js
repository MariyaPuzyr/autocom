"use strict";

$(document).ready(function () {
  /* main promo slider */
  if ($('.single-item').length > 0) {
    $('.main-promo-slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });
  }
  /* main promo slider end */


  if ($('.single-item').length > 0) {
    $('.single-item').slick({
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  if ($('.single-slider').length > 0) {
    $('.single-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  if ($('.page-product-assemble-set__slider').length > 0) {
    $('.page-product-assemble-set__slider').slick({
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  if ($('.action-slider').length > 0) {
    $('.action-slider').slick({
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });
  }
  /* show all text on seo */


  if ($('.offer-description__link').length > 0) {
    $(".offer-description__link").click(function () {
      var t = this;

      if ($(this).data("temp") || $(this).data("temp", $(this).text()), "" != $(this).data("link")) {
        var e = $('[data-id="' + $(this).data("link") + '"]');
        if (0 != e.length) if ($(this).hasClass("close")) $(this).css("opacity", 0), e.removeClass("open"), e.stop().animate({
          "max-height": 81
        }, 100, "linear", function () {
          $(t).stop().animate({
            opacity: 1
          }, 100), $(t).removeClass("close");
        }), $(this).text($(this).data("temp"));else {
          $(this).css("opacity", 0), e.addClass("open");
          var n = e.children().eq(0).outerHeight();
          e.stop().animate({
            "max-height": n
          }, 100, "linear", function () {
            $(t).stop().animate({
              opacity: 1
            }, 100), $(t).addClass("close");
          }), $(this).text() === "Скрыть" ? $(this).text("Показать больше...") : $(this).text("Скрыть");
        }
      }
    });
  }
  /* range slider */


  if ($('#catalog-price').length > 0) {
    $("#catalog-price").slider({
      range: true,
      min: 0,
      max: 5000,
      values: [46, 1522],
      slide: function slide(event, ui) {
        $(".catalog-price--from").val(ui.values[0]);
        $(".catalog-price--to").val(ui.values[1]);
      }
    });
    $(".catalog-price--from").val($("#catalog-price").slider("values", 0));
    $(".catalog-price--to").val($("#catalog-price").slider("values", 1));
  }
  /* show shop cart */


  if ($('.header-cart').length > 0) {
    $('.header-cart').click(function () {
      $('.cart').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    /* hide shop cart */

    $('.cart-overlay, .cart-top__continue-shop, .cart-close').click(function () {
      $('.cart').removeClass('open');
      $('body').css('overflow', 'auto');
    });
  }
  /* shop cart counter */


  if ($('.minus').length > 0) {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }
  /* shop cart counter end */

  /*show dropdown list*/
  // $('.dropdown-list').click(function () {
  //   $(this).toggleClass('open').siblings().removeClass('open');
  // });

  /*show dropdown list end */

  /* dropdown catalog filter*/


  if ($('.catalog-filter--title').length > 0) {
    $('.catalog-filter--title').click(function () {
      $(this).toggleClass('open');
      $(this).next('.catalog-filter__list').slideToggle();
    });
    $('.catalog-filter--title.open').click(function () {
      $(this).removeClass('open');
      $(this).next('.catalog-filter__list').slideUp();
    });
  }
  /* dropdown catalog filterend */

  /* page product slider */


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    loop: true,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [{
      breakpoint: 992,
      settings: "unslick"
    }]
  });
  /* page product slider end*/

  /* single slider */

  $('.product-kit__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
  /* single slider end*/

  /* dropdown language list */

  $('.dropdown-toggle').click(function () {
    $('.dropdown-lang-list').toggleClass('open');
  });
  /* dropdown language list end*/

  $(document).click(function (o) {
    $(o.target).closest(".dropdown-list").length || $(".dropdown-list").removeClass("open"), o.stopPropagation();
  });
  /* init select by styler */

  $(function () {
    $('select').styler();
  });
  /* init select by styler end*/

  /* show buy in one click modal */

  if ($('.buy-click').length > 0) {
    $('.buy-click').click(function (e) {
      e.preventDefault();
      var targetModal = $(this).data('target');
      $(".cart-modal[data-id='" + targetModal + "']").addClass('open');
      $('body').css('overflow', 'hidden');
      $('.kits-product-slider .product-kit__slider').not('.slick-initialized').slick();
      $('.kits-product-slider .product-kit__slider').slick('refresh');
      $('select').trigger('refresh');
    });
    /* hide shop cart */

    $('.cart-overlay, .cart-modal__item .close').click(function () {
      $('.cart-modal').removeClass('open');
      $('body').css('overflow', 'auto');
    });
  }
  /* show buy in one click modal end*/

  /* accordion */


  if ($('.accordion').length > 0) {
    $('.accordion--title').click(function (e) {
      e.preventDefault();
      var $this = $(this);

      if ($this.parent('.accordion-item').hasClass('show')) {
        $('.accordion-item').removeClass('show');
      } else {
        $('.accordion-item').removeClass('show');
        $this.parent('.accordion-item').addClass('show');
      }
    });
  }
  /* accordion end*/
  // Toggle open and close nav styles on click


  $('.nav-toggle').click(function () {
    $('.nav-item').slideToggle();
  }); // Hamburger to X toggle

  $('.nav-toggle').on('click', function () {
    this.classList.toggle('active');
    $(this).parent().toggleClass('active');
  });
  /* show/hide catalog filters by click */

  if ($('.catalog-filters__item').length > 0) {
    $('.catalog-filters__item').click(function () {
      $('.catalog-filters').addClass('open');
    });
    $('.catalog-filter-top .close').click(function () {
      $('.catalog-filters').removeClass('open');
    });
  }
  /* show/hide catalog filters by click end */

  /* get load reviews by click */


  if ($('.page-product-review__get-more').length > 0) {
    $('.page-product-review__get-more').click(function () {
      $('.page-product-review__item').show();
    });
  }
  /* get load reviews by click end */


  if ($('.catalog-items__catalog').length > 0) {
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() + 250 >= $('.catalog-items__catalog').height()) {
        $('.product-item').show();
      }
    });
  }
  /* get load promo product on actions page */


  if ($('.get-action-product').length > 0) {
    $('.get-action-product').click(function () {
      $('.promo').show();
    });
  }
  /* get load promo product on actions page end */

});