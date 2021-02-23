$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
        
    }
    );
  });

$(window).scroll(function(){
    if($(this).scrollTop() >250){
       $('.arrow').show();
    }else{
        $('.arrow').hide();
    }
})