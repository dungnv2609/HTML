$(document).ready(function () {
  var ww = document.body.clientWidth;
  $(".toggleMenu").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav").toggle();
  });
  $(".nav li span").each(function () {
    if ($(this).next(".nav__sub").length > 0) {
      $(this).addClass("parent");
    };
  })
  adjustMenu(ww);
});

function adjustMenu(ww) {
  if (ww <= 767) {
    $(".toggleMenu img").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    $('.toggleMenu').click(function () {
      $(".nav li").removeClass('hover');
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

$(window).bind('resize orientationchange', function () {
  //ww = document.body.clientWidth;
  ww = window.innerWidth;
  adjustMenu(ww);
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

//sitemapにclass付与
if ($("#sitemap")[0]) {
  $("body").addClass("sitemap");
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
    }, 0);
    return false;
  });

});

//Slider Effect
$(window).on('load', function () {
  $('#slider_pc').height($('#slider_pc img').height());
  $('#slider_pc img').css("position", "absolute");
  $('#slider_sp').height($('#slider_sp img').height());
  $('#slider_sp img').css("position", "absolute");
  $(window).on("resize", function () {
    $('#slider_pc').height($('#slider_pc img').height());
    $('#slider_sp').height($('#slider_sp img').height());
  });
  setTimeout(slideShowPc, 3000);
  setTimeout(slideShowSp, 3000);

  function slideShowPc() {
    var current = $('#slider_pc .show');
    var next = current.next().length ? current.next() : current.siblings().first();
    current.fadeOut(3000).removeClass('show');
    next.fadeIn(3000).addClass('show');

    setTimeout(slideShowPc, 6000);
  };

  function slideShowSp() {
    var current = $('#slider_sp .show');
    var next = current.next().length ? current.next() : current.siblings().first();
    current.fadeOut(3000).removeClass('show');
    next.fadeIn(3000).addClass('show');

    setTimeout(slideShowSp, 6000);
  };
});

$('a[href^="#"]').click(function (e) {
  e.preventDefault();
});
