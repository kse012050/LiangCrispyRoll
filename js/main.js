$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('active')
        }else{
            $('header').removeClass('active')
        }
    })


    $('.mainSlider').bxSlider({
        touchEnabled:false,
        pager:false,
        prevSelector: '.mainSliderPrev',
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextSelector: '.mainSliderNext',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });



    $('.main_menuArea .tabMenu li').click(function(e){
        e.preventDefault();
        $('.main_menuArea .tabMenu li').removeClass('active');
        $(this).addClass('active'); 
    })

    $('.main_menuArea .slider').bxSlider({
        pager:false,
        maxSlides : 4,
        minSlides : 4,
        moveSlides : 1,
        slideWidth: 500,
        slideMargin: 50,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    });

    $('.main_storeArea .slider').bxSlider({
        pager:false,
        prevText: '<span class="material-icons-outlined">chevron_left</span>',
        nextText: '<span class="material-icons-outlined">navigate_next</span>',
    })
})