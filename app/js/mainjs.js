$(document).ready(function () {
  $(".toggleMenu").click(function (e) {
    if ($(".toggleMenu").hasClass("active")) {

      $(".toggleMenu").removeClass("active");
      $('.toggleMenu .img_show').css('display', 'inline-block');
      $('.toggleMenu .img_hide').css('display', 'none');
      $('body').css({
        'overflow': 'auto',
        'position': 'relative'
      });

      $(".nav").hide();
      
    } else {

      $(".toggleMenu").addClass("active");
      $('.toggleMenu .img_show').css('display', 'none');
      $('.toggleMenu .img_hide').css('display', 'inline-block');
      $('body').css({
        'overflow': 'hidden',
        'position': 'fixed'
      });

      $(".nav").show();
      $(".nav li").removeClass('hover');

      changeHeightMenu();

    }
  });

  $("#gnav ul.nav li a").click(function () {
    if ($(window).width() < 768) {
      $(".nav").fadeOut("fast");
    }
  });

  $(".nav li span").each(function () {
    if ($(this).next(".sub").length > 0) {
      $(this).addClass("parent");
    }
  });

  var ww = document.body.clientWidth;
  adjustMenu(ww);
});

function adjustMenu(ww) {
  if (ww <= 767) {

    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }

    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li span.parent").unbind("click");
    $(".nav li span.parent").click(function (e) {
      e.preventDefault();
      if ($(this).parent("li").hasClass('hover')) {
        $(this).parent("li").removeClass('hover');
      } else {
        $(".nav li").removeClass('hover');
        $(this).parent("li").addClass('hover');
      }
    });

  } else {

    $(".nav").show();
    $(".nav li").unbind("hover");
    $(".nav li").hover(function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });

  }
}

function changeHeightMenu() {
  var ulHeight = window.innerHeight - $('.nav__logo').outerHeight() - $('.nav > .menu__title').outerHeight();
  $('.nav > ul').css('height', ulHeight);
}

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 100) {
    $('header').css({
      'background': 'rgba(255, 255, 255, 1)'
    });
  } else {
    $('header').css({
      'background': 'rgba(255, 255, 255, .9)'
    });
  }
});

$(window).bind('resize orientationchange', function () {
  ww = window.innerWidth;
  adjustMenu(ww);
  
  // $(".toggleMenu").removeClass("active");
  // $(".nav li").removeClass('hover');
  // $('.toggleMenu .img_show').css('display', 'inline-block');

  if ($('.toggleMenu').hasClass('active')) {
    // $('.toggleMenu .img_show').css('display', 'none');
    // $('.nav').show();
    changeHeightMenu();
  } else {
    // $('.toggleMenu .img_hide').css('display', 'none');
    // $('.nav').hide();
  }
});

var ua = navigator.userAgent;
if (ua.search(/Android/) != -1 || ua.search(/iPad/) != -1 || ua.search(/iPhone/) != -1) {
  $("body").addClass("android");
}

//iOSにclass付与
var ua = navigator.userAgent;
if (ua.search(/iPad/) != -1 || ua.search(/iPhone/) != -1) {
  $("body").addClass("ios");
}

//iPadにclass付与
var ua = navigator.userAgent;
if (ua.search(/iPad/) != -1) {
  $("body").addClass("ipad");
}

/* Add class for mac */
if (navigator.appVersion.indexOf("Win") != -1) {
  $('body').addClass('window-os');
}

if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
  $('body').addClass('mac-os');
}


/* =====================================
  header fixed css
===================================== */
$(function () {
  headerPadding();
  $(window).resize(function () {
    headerPadding();
  });

  function headerPadding() {
    var position = $("#header .header_wrap").css("position");
    if (position == "fixed") {
      var h = $(".header_wrap").height();
      $("#header").css({
        "padding-top": h
      });
    } else {
      $("#header").css({
        "padding-top": "initial"
      });
    }
  }
});

/***********************************************************
    new maxheight
************************************************************/
$(document).ready(function () {
  if ($(".maxH")[0]) {
    resizeH(".maxH", true);
    $(window).bind("orientationchange resize", function () {
      resizeH(".maxH", true);
    });
  }

  if ($(".maxH__xs")[0]) {
    resizeH(".maxH__xs", false);
    $(window).bind("orientationchange resize", function () {
      resizeH(".maxH__xs", false);
    });
  }
});

function resizeH(eleH, onlyPc) {
  if ($(window).width() <= 767 && onlyPc) {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
  } else {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
    $(eleH).each(function () {
      var maxH = 0;
      var maxH2 = 0;
      $(this).find(".hTit").each(function () {
        hTit = $(this).outerHeight();
        if (maxH2 < hTit) {
          maxH2 = hTit;
        }
      });
      $(this).find(".hTit").outerHeight(maxH2);
      $(this).find(".hBody").each(function () {
        hBody = $(this).outerHeight();
        if (maxH < hBody) {
          maxH = hBody;
        }
      });
      $(this).find(".hBody").outerHeight(maxH);
    });
  }
}

//Scroll to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
      $('.btn_toppage img').fadeIn();
    } else {
      $('.btn_toppage img').fadeOut();
    }
  });

  $('.btn_toppage img').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
    return false;
  });

});

//Slider Effect
$(window).on('load', function () {
  $('#slider_pc').height($('#slider_pc img').height());
  $('#slider_pc img').css("position", "absolute");
  // $('#slider_pc img:not(.show)').css("display", "none");
  $('#slider_sp').height($('#slider_sp img').height());
  $('#slider_sp img').css("position", "absolute");
  // $('#slider_sp img:not(.show)').css("display", "none");
  $(window).on("resize", function () {
    $('#slider_pc').height($('#slider_pc img').height());
    $('#slider_sp').height($('#slider_sp img').height());
  });
  setTimeout(slideShowPc, 6000);
  setTimeout(slideShowSp, 6000);

  function slideShowPc() {
    var current = $('#slider_pc .show');
    var next = current.next().length ? current.next() : current.siblings().first();
    current.fadeOut(8000).removeClass('show');
    next.fadeIn(8000).addClass('show');

    setTimeout(slideShowPc, 12000);
  };

  function slideShowSp() {
    var current = $('#slider_sp .show');
    var next = current.next().length ? current.next() : current.siblings().first();
    current.fadeOut(8000).removeClass('show');
    next.fadeIn(8000).addClass('show');

    setTimeout(slideShowSp, 12000);
  };
});

$('a[href="#"]').click(function (e) {
  e.preventDefault();
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 150
  }, 500);
});

var feed_sec1 = "https://blog.vogue.co.jp/rss.xml";
var feed_sec3 = "https://blog.vogue.co.jp/rss.xml";
