$(window).on('load', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('.scroll-page').offset().top - 150
    }, 1000);
});
