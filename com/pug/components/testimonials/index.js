(function ($) {

    /*-------------------------------------
    Slider Reviews
    -------------------------------------*/

    var owlReviews = $('#slider-reviews');

    if (owlReviews.length) {
        owlReviews.owlCarousel({
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            dots: true,
            autoplayHoverPause: true,
            navText: ["<span class=\"left\"><span></span></span>", "<i class=\"right\"><span></span></i>"],
            onChanged: callback,
            onInitialized: callback
        });

        function callback() {
            var dotsItem = $('.reviews').find('.owl-dot').length;
            $('.counter_total').text(dotsItem);
            var dotActive = $('.reviews').find('.owl-dot.active').index() + 1;
            $('.counter_this').text(dotActive);
        }
    }


})(jQuery);