var responsiveBoolean = true;
var responsiveWidht = 1280;
var mainMenuSlider;
var mainMenuSliderAPI;

$(document).ready(function(){
    menu();

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

    if($(window).width() >= 1280){
        responsiveBoolean = true;
    }else{
        responsiveBoolean = false;
    }
    mainSlider(responsiveBoolean);

    $(window).resize(function(){
        if($(window).width() >= 1280){
            responsiveBoolean = true;
        }else{
            responsiveBoolean = false;
        }

        menu(responsiveBoolean)
        mainSlider(responsiveBoolean);
    })
   
});

function menu(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            if($(window).width() >= responsiveWidht){
                $('header').addClass('active')
            }
        }else{
            if($(window).width() >= responsiveWidht){
                $('header').removeClass('active')
            }
        }
    })

    if(responsiveBoolean){
        $('header nav').hover(function(){
            if($(window).width() >= responsiveWidht){
                // $('header').addClass('active');
                $('header nav ul li ul').stop().slideDown();
            }
        },function(){
            if($(window).width() >= responsiveWidht){
                // $('header').removeClass('active');
                $('header nav ul li ul').stop().slideUp();
            }
        });
    }else{
        $('.menuBtn').click(function(){
            if($(window).width() < responsiveWidht){
                $(this).toggleClass('active');
                $('nav').stop().fadeToggle();
            }
        })    
    }
}

function mainSlider(responsiveBoolean){
    $('.mainSlider').bxSlider({
        touchEnabled:false,
        pager:false,
        prevSelector: '.mainSliderPrev',
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextSelector: '.mainSliderNext',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });
    console.log($(window).width() >= responsiveWidht);
    console.log(responsiveBoolean);
    if($(window).width() >= responsiveWidht && responsiveBoolean){
        mainMenuSliderAPI = {
            pager:false,
            maxSlides : 4,
            minSlides : 4,
            moveSlides : 1,
            slideWidth: 500,   
            slideMargin: 50,
            prevText: '<span class="material-icons-outlined">chevron_left</span>',
            nextText: '<span class="material-icons-outlined">navigate_next</span>',
        }
    }else if(!responsiveBoolean){
        mainMenuSliderAPI = {
            pager:false,
            prevText: '<span class="material-icons-outlined">chevron_left</span>',
            nextText: '<span class="material-icons-outlined">navigate_next</span>',
        }
    }
    
    mainMenuSlider = $('.main_menuArea .slider').eq(0).bxSlider(mainMenuSliderAPI);

    $('.main_menuArea .tabMenu li').click(function(e){
        e.preventDefault();
        $('.main_menuArea .tabMenu li').removeClass('active');
        $(this).addClass('active'); 
        $('.main_menuArea .menuSliderArea .menuSlider').removeClass('active');
        $('.main_menuArea .menuSliderArea .menuSlider').eq($(this).index()).addClass('active');
        mainMenuSlider.destroySlider();
        mainMenuSlider = $('.main_menuArea .slider').eq($(this).index()).bxSlider(mainMenuSliderAPI);
    })

    $('.main_storeArea .slider').bxSlider({
        pager:false,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    })
}