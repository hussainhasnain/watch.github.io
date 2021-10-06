$(document).ready(function(){
/* ====================== JS Code Here ========================== */

/* ====================== Mobile Responsive Navigation ========================== */

    $('.js--menu').click(function() {
        var nav = $('.js--nav__list');

        nav.slideToggle(200);
        var icon = $('.js--menu');
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
        $(window).on('resize', function() {

            if ($(this).width() > 900) {
            $('.nav__list').css({
                'display': 'inline-block'
            });
            } else {
            $('.nav__list').css({
                'display': 'none'
            });
            }
        });
    });

/* ====================== Owl Carousel ========================== */

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            900:{
                items:3,
                nav:true,
                loop:false
            },
            1200:{
                items:3,
                nav:true,
                loop:false
            }
        }
    
    });
    $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
    });


    /* ====================== Isotope Plugin =================== */

    $('.featured__grid').isotope({
        // options
        itemSelector: '.featured__grid--item',
        layoutMode: 'fitRows'
    });
    $('.featured__item').click(function(){
        $('.featured__item').removeClass('featured__item-active');
        $(this).addClass('featured__item-active');

        var selector = $(this).attr('data-filter');
        $('.featured__grid').isotope({
            filter: selector
        });
        return false;
    });

});

/* =========================  Swiper JS ============================ */
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: '4',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/* ======================  Smooth Scroll ========================== */
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 900
});

