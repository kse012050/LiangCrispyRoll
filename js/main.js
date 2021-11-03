var mainMenuSlider;
var mainMenuSliderAPI;

var mainMenuSliderAPISave;

$(document).ready(function(){

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

    mainMenuSliderInit();
    mainSlider();
    mainSliderClick();

    $(window).resize(function(){
        if($(window).width() >= responsiveWidht){
            responsiveBoolean = true;
        }else{
            responsiveBoolean = false;
        }

        mainMenuSliderInit()
        mainSliderResponsive();
    })
});


function mainSlider(){
    $('.mainSlider').bxSlider({
        touchEnabled:false,
        pager:false,
        prevSelector: '.mainSliderPrev',
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextSelector: '.mainSliderNext',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });
   
    mainMenuSlider = $('.main_menuArea .slider').eq(0).bxSlider(mainMenuSliderAPI);

    $('.main_storeArea .slider').bxSlider({
        pager:false,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    })

   
}

function mainMenuSliderInit(){
    if($(window).width() >= responsiveWidht){
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
    }else{
        mainMenuSliderAPI = {
            pager:false,
            prevText: '<span class="material-icons-outlined">chevron_left</span>',
            nextText: '<span class="material-icons-outlined">navigate_next</span>',
        }
    }
}

function mainSliderResponsive(){
    if(mainMenuSliderAPISave != mainMenuSliderAPI){
        mainMenuSlider.reloadSlider(mainMenuSliderAPI);
        mainMenuSliderAPISave = mainMenuSliderAPI;
    }
    
}

function mainSliderClick(){
    $('.main_menuArea .tabMenu li').click(function(e){
        e.preventDefault();
        $('.main_menuArea .tabMenu li').removeClass('active');
        $(this).addClass('active'); 
        $('.main_menuArea .menuSliderArea .menuSlider').removeClass('active');
        $('.main_menuArea .menuSliderArea .menuSlider').eq($(this).index()).addClass('active');
        mainMenuSlider.destroySlider();
        mainMenuSlider = $('.main_menuArea .slider').eq($(this).index()).bxSlider(mainMenuSliderAPI);
    })
}