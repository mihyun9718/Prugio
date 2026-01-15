
//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        fade: true
    });





});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header .gnb>ul').addClass('on')
        } else {
            $('.header .gnb>ul').removeClass('on')
        }
    })
})

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
})


$(function () {
    $('.header .inner .mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
    })
})

