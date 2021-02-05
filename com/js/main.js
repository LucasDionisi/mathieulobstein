(function ($) {
    "use strict";

    /*-------------------------------------
    Background Image
    -------------------------------------*/
    $('div').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });

    /*-------------------------------------
    Animate Effect
    -------------------------------------*/
    if (document.getElementById('primary') !== null) {
        var primaryData = document.getElementById('primary').dataset.animate;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) != true && primaryData === 'on') {
            new WOW().init();
        }
    }

    /*-------------------------------------
    Background Section
    -------------------------------------*/
    $('.page-template-landing-page').find('section:even').addClass("bg_light");

    /*-------------------------------------
    * Header Sticly
    -------------------------------------*/
    var isSticly = $('header').attr('data-sticly');
    var header = $('header');
    var headerHeight = $('header').outerHeight();
    if(headerHeight > 300){headerHeight = 68};

    if (isSticly === 'on') {
        $(document).on('scroll', function () {
            if ($(this).scrollTop() >= headerHeight) {
                header.addClass('header__fix');
            }
            else {
                header.removeClass('header__fix');
            }
        });
    }

    /*-------------------------------------
    BTN Back
    -------------------------------------*/

    var btnBack = $('.btn_back');

    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            btnBack.css('display', 'flex');
        } else {
            btnBack.css('display', 'none');
        }
    });

    btnBack.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 1800);
    });

    /*-------------------------------------
    Burger Click
    -------------------------------------*/
    var menu = $('#menu-primary-menu');

    $('.burger').on('click', function () {
        $(this).toggleClass('burger_active');
        menu.toggleClass('open');

        $('body').toggleClass('body__fixed');
        $('.menu-item-has-children').removeClass('open')
    });

    /*-------------------------------------
    Burger Menu
    -------------------------------------*/
    $('.drop-menu ').on('click', function () {
        $(this).parent('.menu-item-has-children').toggleClass('open');
    });

    function checkMenu() {
        if ($(window).width() < 992) {
            menu.addClass('header_menu_burger');
            menu.removeClass('header_menu');
        }
        else {
            if ($('.header_burger').length > 0) {
                return null;
            }
            else {
                menu.addClass('header_menu');
                menu.removeClass('header_menu_burger');
            }
        }
    }

    $(window).resize('on', function () {
        checkMenu();
    });

    checkMenu();

    /*-------------------------------------
    Preloader
    -------------------------------------*/
    $(window).on('load', function () {
        var preloader = $('.preloader');
        if (preloader.length) {
            preloader.delay(600).fadeOut('slow');
        }
    });

    /*-------------------------------------
    * Slider click icon mouse
    -------------------------------------*/
    var slideMouse = $('.slider--mouse');
    if (slideMouse.length) {
        $(document).on('click', '.slider_mouse', function () {
            var slideHeight = $('.slider').height();
            $('html,body').animate({scrollTop: slideHeight}, 800);
        });
    }

    /*-------------------------------------
    Anchors Menu
    -------------------------------------*/
    $('a.anchor').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if (elementClick.length) {
            $('html,body').animate({
                scrollTop: destination
            }, 800);

            return false;
        }
    });

    /*-------------------------------------
    Sticky Sidebar
    -------------------------------------*/
    var sidebar = $('#sidebar');

    if (sidebar.length) {
        sidebar.stickySidebar({
            innerWrapperClass: 'sidebar_inner',
            topSpacing: 80,
            bottomSpacing: 40
        });
    }

})(jQuery);


