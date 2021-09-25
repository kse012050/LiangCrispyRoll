$(document).ready(function(){
    var mainMenuSlider;

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('active')
        }else{
            $('header').removeClass('active')
        }
    })

    $('header nav').hover(function(){
        // $('header').addClass('active');
        $('header nav ul li ul').stop().slideDown();
    },function(){
        // $('header').removeClass('active');
        $('header nav ul li ul').stop().slideUp();
    })

    $('[data-popupClick="question"]').click(function(e){
        var popupName = $(this).attr('data-popupClick');
        $('[data-popupName="'+popupName+'"]').stop().fadeIn();
        $('body').css('overflow','hidden');
        $('[data-popupName="'+popupName+'"] , [data-popupName="'+popupName+'"] .popupClose ').on('click',function(){
            $('[data-popupName="'+popupName+'"]').stop().fadeOut();
            $('body').removeAttr('style');
        })
        $('[data-popupName="'+popupName+'"] > *').on('click',function(e){
            e.stopPropagation();
        })
    });


    $('.mainSlider').bxSlider({
        touchEnabled:false,
        pager:false,
        prevSelector: '.mainSliderPrev',
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextSelector: '.mainSliderNext',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });



    
    mainMenuSlider = $('.main_menuArea .slider').eq(0).bxSlider({
        pager:false,
        maxSlides : 4,
        minSlides : 4,
        moveSlides : 1,
        slideWidth: 500,
        slideMargin: 50,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });

    $('.main_menuArea .tabMenu li').click(function(e){
        e.preventDefault();
        $('.main_menuArea .tabMenu li').removeClass('active');
        $(this).addClass('active'); 
        $('.main_menuArea .menuSliderArea .menuSlider').removeClass('active');
        $('.main_menuArea .menuSliderArea .menuSlider').eq($(this).index()).addClass('active');
        mainMenuSlider.destroySlider();
        mainMenuSlider = $('.main_menuArea .slider').eq($(this).index()).bxSlider({
            pager:false,
            maxSlides : 4,
            minSlides : 4,
            moveSlides : 1,
            slideWidth: 500,
            slideMargin: 50,
            prevText: '<span class="material-icons-outlined">chevron_left</span>',
            nextText: '<span class="material-icons-outlined">navigate_next</span>',
        });
    })

    $('.main_storeArea .slider').bxSlider({
        pager:false,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    })
})