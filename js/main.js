$(document).ready(function() {
    $('.menu-wrapper').click(function() {
        $('.adaptive').slideToggle();
        $('.adaptive-wrapper .link').slideToggle();
    });
    //
    $(".achiev-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".achiev").offset().top
        }, 500);
    });

    $(".helpers-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".helpers").offset().top
        }, 500);
    });

    $(".recemption-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".recemption").offset().top
        }, 500);
    });

    $(".contact-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 500);
    });

    $(".promo-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".promo").offset().top
        }, 500);
    });

    $(".news-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".news").offset().top
        }, 500);
    });

    $(".about-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });
    //
    $('.link-all__arrow').click(function() {
        $('.link-all__socials').slideToggle(500);
        $('.linkArrow').toggleClass("svg");
    });
    //
    $('.main-wrapper__arrow').click(function() {
        $('.swiper').slideToggle();
        $('.linkArrow-two').toggleClass("svg");
    });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2.5,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.buttons-next',
        prevEl: '.buttons-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        780: {
            slidesPerView: 2
        },
        1500: {
            slidesPerView: 2.5
        }
    },
});

$(function() {

    // Vars
    var modBtn = $('.click-modal'),
        modal = $('#popup-bg'),
        close = modal.find('.close-popup'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});