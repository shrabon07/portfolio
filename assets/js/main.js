(function(window) {

    'use strict';

    $.exists = function(selector) {
        return ($(selector).length > 0);
    }

    PageTransition();
    Menu();
    HomeSlider();
    Sort();
    UniteGallery();
    ValidForm();

    $('body').append('<a href="https://wa.me/8801977665421" target="_blank" class="whatsapp-float" aria-label="WhatsApp"><svg viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 8.268 2 16c0 3.066.924 5.91 2.504 8.318L3 30l5.858-1.536C11.13 29.708 13.508 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.726 19.682c-.332.934-1.152 1.536-2.138 1.536-.574 0-1.072-.134-1.646-.402-.664-.308-4.088-2.008-5.432-4.088-1.344-2.08-1.344-3.876-.804-4.956.522-1.048 1.168-1.406 1.676-1.676.214-.114.468-.174.74-.174.272 0 .474.136.664.402.19.266 1.188 1.672 1.188 1.672.19.332.19.664 0 .996-.136.266-.29.424-.474.664-.122.158-.26.33-.396.502a.714.714 0 0 0-.05.746c.28.484 1.348 2.364 2.79 3.092.28.142.534.218.812.218.274 0 .532-.12.748-.318.082-.076.172-.156.27-.244.168-.15.336-.302.504-.454.22-.2.472-.248.738-.142.206.084 1.518.778 1.518.778.206.084.362.172.46.302.142.202.138.574-.196 1.508z"/></svg></a>');

})(window);

function PageTransition() {
    var preload = anime({
        targets: '.ms-preloader',
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInOutCubic',
        complete: function(preload) {
            $('.ms-preloader').css('visibility', 'hidden');
        }
    });
    $('.ms-main-container').addClass('loaded');
    var cont = anime({
        targets: '.loaded',
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 300,
        complete: function(preload) {
            $('.ug-thumb-image').css({
                'opacity': '1'
            });
            $('.ms-section__block img').css({
                'opacity': '1'
            });
            $('.ug-thumb-wrapper, .post-item').css({
                'pointer-events': 'auto'
            });
        }
    });
    $(document).on('click', '[data-type="page-transition"]', function(e) {
        var url = $(this).attr('href');
        if (url != '#' && url != '') {
            e.preventDefault();
            $('.ms-preloader').css('visibility', 'visible');
            var url = $(this).attr('href');
            var preload = anime({
                targets: '.ms-preloader',
                opacity: [0, 1],
                duration: 300,
                easing: 'easeInOutQuad',
                complete: function(preload) {
                    window.location.href = url;
                }
            });
        }
    });
}

function Menu() {
    if ($.exists('.hamburger')) {
        $('.hamburger').on('click', function(e) {
            var burger = $(this),
                clicked = parseInt(burger.data('clicked')) || 0;
            burger.data('clicked', clicked + 1);
            if (clicked % 2 == 0) {
                var current = $(window).scrollTop();
                $(window).scroll(function() {
                    $(window).scrollTop(current);
                });
            } else {
                $(window).off('scroll');
            }
            $(burger).toggleClass('is-active');
            $('.ms-nav').toggleClass('is-visible');
            $('.ms-header').not('.navbar-white').each(function() {
                $('.logo-light').toggleClass('active');
            });
        });
    }
}

function HomeSlider() {
    if ($.exists('.swiper-container')) {
        var interleaveOffset = -.6;
        var interleaveEffect = {
            onProgress: function(swiper, progress) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slide = swiper.slides[i];
                    var translate, innerTranslate;
                    progress = slide.progress;
                    if (progress > 0) {
                        translate = progress * swiper.width;
                        innerTranslate = translate * interleaveOffset;
                    } else {
                        innerTranslate = Math.abs(progress * swiper.width) * interleaveOffset;
                        translate = 0;
                    }
                    $(slide).css({
                        transform: 'translate3d(' + translate + 'px,0,0)'
                    });
                    $(slide).find('.slide-inner').css({
                        transform: 'translate3d(' + innerTranslate + 'px,0,0)',
                    });
                }
            },
            onTouchStart: function(swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i]).css({
                        transition: ''
                    });
                }
            },
            onSetTransition: function(swiper, speed) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.slide-inner')
                        .addBack()
                        .css({
                            transition: speed + 'ms'
                        });
                }
            }
        };
        var swiperOptions = {
            loop: false,
            speed: 1000,
            grabCursor: false,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            simulateTouch: false,
            pagination: '.swiper-pagination',
            paginationType: 'progress',
            onSlideChangeEnd: function() {
                $('.expanded-timeline__counter span:first-child').text(swiper.activeIndex + 1);
            }
        };
        swiperOptions = $.extend(swiperOptions, interleaveEffect);
        var swiper = new Swiper('.swiper-container', swiperOptions);
        $('.expanded-timeline__counter span:first-child').text('1');
        $('.expanded-timeline__counter span:last-child').text(swiper.slides.length);
    }
}

function Sort() {
    if ($.exists('.filtr-container')) {
        var $items = $('.filtr-container').find('.filtr-item');
        $items.css({ opacity: 1, transform: 'none', position: 'relative', width: '', height: '' }).find('a').css({ paddingTop: '60%' });
        $('.filtr-btn li').on('click', function() {
            var filter = $(this).attr('data-filter');
            $('.filtr-btn li').removeClass('active');
            $(this).addClass('active');
            $('.filtr-container').find('.filtr-item').removeClass('filter-hidden');
            if (filter !== 'all') {
                $('.filtr-container').find('.filtr-item').not('[data-category="' + filter + '"]').addClass('filter-hidden');
            }
        });
    }
}

function UniteGallery() {
    if ($.exists('#gallery')) {
        $('#gallery').unitegallery({
            gallery_theme: 'tiles',
            tiles_type: 'justified',
            tiles_col_width: 400,
            tiles_justified_row_height: 400,
            tiles_justified_space_between: 30,
            tile_overlay_opacity: 0.7,
            tile_enable_icons: false,
            tile_textpanel_position: 'inside_bottom',
        });
    }
}

$.validator.addMethod('strictEmail', function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
}, '<span>Please enter a valid email address.</span>');

function ValidForm() {
    if ($.exists('#validForm')) {
        $('.form-control').focus(function() {
            $(this).prev('.control-label').addClass('active');
        });
        $('.form-control').focusout(function() {
            $(this).prev('.control-label').removeClass('active');
        });
        $('#validForm').validate({
            ignore: ':hidden',
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                },
                email: {
                    required: true,
                    strictEmail: true,
                },
                subject: {
                    required: true,
                },
                message: {
                    required: true,
                    minlength: 16,
                },
            },
            messages: {
                name: {
                    required: '<span>Please enter your name</span>',
                    minlength: '<span>Your name must consist of at least 2 characters</span>',
                    maxlength: '<span>The maximum number of characters - 24</span>',
                },
                email: {
                    required: '<span>Please enter your email</span>',
                    strictEmail: '<span>Please enter a valid email address.</span>',
                },
                subject: {
                    required: '<span>Please select a subject</span>',
                },
                message: {
                    required: '<span>Please write me message</span>',
                    minlength: '<span>Your message must consist of at least 16 characters</span>',
                    maxlength: '<span>The maximum number of characters - 100 </span>',
                },
            },
            submitHandler: function(form) {
                var data = $(form).serializeArray();
                var payload = {};
                data.forEach(function(field) { payload[field.name] = field.value; });
                fetch('https://script.google.com/macros/s/AKfycbzPA4wmKk2pzliVLeRgXm7HHGAfcKNhXnSsZo9ckevnhXfFt3b2Vh1c6at_S1TuLFU/exec', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).then(function(){ $('input, textarea').val(''); $('.form-group').blur(); }).catch(function(err){ console.error(err); });
                return false;
            }
        });
    }
}