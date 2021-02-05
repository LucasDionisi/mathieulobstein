(function ($) {

    var sliderCompany = $('#owl-slider-company');

    /*-------------------------------------
     * Owl slider header
     -------------------------------------*/

    if (sliderCompany.length) {
        sliderCompany.owlCarousel({
            // dots: false,
            // nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            autoplayHoverPause: true,
            navText: ["<span class=\"left\"><span></span></span>", "<i class=\"right\"><span></span></i>"],
            responsive: {
                0: {
                    dots: true,
                    nav: false,
                    items: 1
                },
                600: {
                    dots: true,
                    nav: false,
                    items: 1
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: true
                }
            }
        });
    }

    /*-------------------------------------
    Video
    -------------------------------------*/
    $('.play-youtube').magnificPopup({
        type: 'iframe',
        autoFocusLast: false,
        mainClass: 'mfp-with-zoom',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },

                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },

                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    });

})(jQuery);
