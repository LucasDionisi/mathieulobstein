(function ($) {
    var slider = $('#owl-slider-2');

    /*-------------------------------------
     * Owl slider header
     -------------------------------------*/

    if (slider.length) {
        slider.owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 1000,
            animateOut: 'fadeOut',
            autoplayHoverPause: true
        });
    }

    /*-------------------------------------
    YTPlayer
    -------------------------------------*/
    var videoBg = $("#videoBg");

    if (videoBg.length && status) {
        videoBg.mb_YTPlayer();
    };

})(jQuery);