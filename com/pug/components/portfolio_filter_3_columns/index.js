
(function ($) {

    /*-------------------------------------
    Portfolio
    -------------------------------------*/
    $('#isotope').isotope({
        itemSelector: '.portfolioBox',
        filter: "*"
    });

    $('.filter_btn').click(function () {
        var selector = $(this).attr('data-filter');

        $('#isotope').isotope({
            filter: selector,
        });

        $('.filter_btn.active').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);