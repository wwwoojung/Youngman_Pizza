$(function () {



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
        arrows: false,
        asNavFor: '.new_menu_content .left .slide_box',
    });

    $('.main_menu .tab_menu>li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();

        $('.main_menu .tab_menu>li').removeClass('on');
        $('.main_menu .menu_box').removeClass('on');
        $('.main_menu .tab_menu>li').eq(idx).addClass('on');
        $('.main_menu .menu_box').eq(idx).addClass('on');
    })

    $('#promotion').YTPlayer({
        videoURL: 'https://youtu.be/M0pZKgK9lNg',
        containment: '.main_promotion .video_case',
        optimizeDisplay: false,
        autoPlay: false,
        playOnlyIfVisible: true,
    });

    AOS.init();
})