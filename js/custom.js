$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header_wrap').addClass('on')
        } else {
            $('.header_wrap').removeClass('on')
        }
    })

    $('.header_wrap .gnb .more_btn').on('click', function (e) {
        e.preventDefault();
        $('.header_wrap .gnb .sub_menu').toggleClass('on');
        $('.material-symbols-outlined').toggleClass('on');
    })

    $('.mbt').on('click', function () {
        $('.header_wrap .gnb').toggleClass('on')
    })

    $('.main_visual .visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        arrows: false,
        dots: true,
    });

    $('.new_menu_content .left .slide_box').slick({
        fade: true,
        asNavFor: '.new_menu_content .right .slide_box',
    });

    $('.new_menu_content .right .slide_box').slick({
        slidesToShow: 3,
        arrows: true,
        asNavFor: '.new_menu_content .left .slide_box',
    });

    $('.main_menu .tab_menu>li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();

        $('.main_menu .tab_menu>li').removeClass('on');
        $('.main_menu .menu_box').removeClass('on');
        $('.main_menu .tab_menu>li').eq(idx).addClass('on');
        $('.main_menu .menu_box').eq(idx).addClass('on');
    })

    AOS.init();
})