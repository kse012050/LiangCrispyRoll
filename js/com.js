var responsiveBoolean = true;
var responsiveWidht = 1263;


$(document).ready(function(){
    if($(window).width() >= responsiveWidht){
        responsiveBoolean = true;
    }else{
        responsiveBoolean = false;
    }
    menu();
    popup();

    $(window).resize(function(){
        menuResize(responsiveBoolean);
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

    $('header nav').hover(function(){
        if($(window).width() >= responsiveWidht){
            $('header nav ul li ul').stop().slideDown();
        }
    },function(){
        if($(window).width() >= responsiveWidht){
            $('header nav ul li ul').stop().slideUp();
        }
    });
   
    $('.menuBtn').click(function(){
        if($(window).width() < responsiveWidht){
            $(this).toggleClass('active');
            $('nav').stop().fadeToggle();
        }
    })    
}

function menuResize(responsiveBoolean){
    if(responsiveBoolean){
        $('header > div nav').removeAttr('style');
    }
}

function popup(){
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
}
