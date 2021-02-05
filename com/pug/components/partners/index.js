(function ($) {

    /*-------------------------------------
    Slider Partners
    -------------------------------------*/
    if ($('#slider_partners') !== 'undefined') {
        $('#slider_partners').owlCarousel({
            dots: true,
            navigation: false,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }
})(jQuery);