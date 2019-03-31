$(document).ready(function () {
  var ww = document.body.clientWidth;
  $(".toggleMenu").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav").toggle();
  });
  $(".nav li span").each(function () {
    if ($(this).next(".sub").length > 0) {
      $(this).addClass("parent");
    };
  })
  adjustMenu(ww);

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
});

function adjustMenu(ww) {
  if (ww <= 767) {
    //    $(".toggleMenu .img_show").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    $('.toggleMenu').click(function () {
      var barH = screen.height - window.innerHeight;
      var setH = window.innerHeight - barH;

      $(".nav li").removeClass('hover');
      if ($(".toggleMenu").hasClass("active")) {
        $('.toggleMenu .img_show').css('display', 'none');
        $('.toggleMenu .img_hide').css('display', 'inline-block');
        $('body').css({
          'overflow': 'hidden',
          'position': 'fixed'
        });
        $('.nav').css('height', '100vh');
        $('.nav > ul').css('height', setH - 50);
      } else {
        $('.toggleMenu .img_show').css('display', 'inline-block');
        $('.toggleMenu .img_hide').css('display', 'none');
        $('body').css({
          'overflow': 'auto',
          'position': 'relative'
        });
      }
    });
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
    $(".toggleMenu img").css("display", "none");
    $(".nav").show();
    $(".nav li").unbind("hover");
    $(".nav li").hover(function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });
  }
}

$(window).on('hashchange', function () {
  $(".toggleMenu").removeClass("active");
  $(".nav li").removeClass('hover');
});


$("#gnav ul.nav li a").click(function () {
  if ($(window).width() < 768) {
    $(".nav").fadeOut("fast");
  }
});

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 100) {
    $('header').css({
      'background:': 'rgba(0, 0, 0, 0.9)'
    });
  } else {
    $('header').css({
      'background:': 'rgba(0, 0, 0, 0.9)'
    });
  }
});

$(window).bind('resize orientationchange', function () {
  //ww = document.body.clientWidth;
  ww = window.innerWidth;
  adjustMenu(ww);
  /*$(".toggleMenu").removeClass("active");*/
  $(".nav li").removeClass('hover');
  var barH = screen.height - window.innerHeight;
  var setH = window.innerHeight - barH;
  if ($(".toggleMenu").hasClass("active")) {
    $('.nav').css('height', '100vh');
    $('.nav > ul').css('height', setH - 50);
  }
});

/*$(window).on("deviceorientation", function (event) {
  if (window.matchMedia("(orientation: portrait)").matches) {
    $('.nav > ul').css('max-height', '500px');
  }
  if (window.matchMedia("(orientation: landscape)").matches) {
    $('.nav > ul').css('max-height', '300px');
  }
});*/

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
    resizeH(".maxH");
    $(window).bind("orientationchange resize", function () {
      resizeH(".maxH");
    });
  }
});

function resizeH(eleH) {
  if ($(window).width() > 767) {
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
  } else {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
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
