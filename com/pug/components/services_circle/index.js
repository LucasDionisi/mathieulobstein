(function ($) {

    /*-------------------------------------
     * Service Auto height circle
     -------------------------------------*/
    function autoHeightCircle() {
        var circle = $('.circle--rotate'),
            circleInner = $('.animate-wrapper'),
            circleH = circle.width(),
            circleInnerH = circleInner.width();
        circle.height(circleH);
        circleInner.height(circleInnerH);
    }

    /*-------------------------------------
     * Services parallax image
     -------------------------------------*/

    autoHeightCircle();

    $(window).resize(function () {
        autoHeightCircle();
    });

    $("#circle--rotate").circle();


    /*-------------------------------------
     * Services parallax image
     -------------------------------------*/

    $(window).scroll(function () {
        if (jQuery(window).width() > 500) {
            var st = ($(this).scrollTop() / 50),
                st_scale = ($(this).scrollTop() / 70) + 100;

            $('.animate-img_in').css({
                "background-position": st + "% " + st + "%",
                // "background-size": st_scale + "%" + st_scale + "%"
            });
        }
    });

})(jQuery);