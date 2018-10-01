$(window).on("scroll", function(){
    if($(window).scrollTop()){
       $('header').addClass('white');
       }
    else{
        $('header').removeClass('white');
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        450:{
            item:2
        },
        1000:{
            items:5
        }
    }
})

// wow animation Js
    new WOW().init();

// CSS loader animation
