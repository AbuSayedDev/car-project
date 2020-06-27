    $('.owl-carousel').owlCarousel({
        margin:15,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-chevron-left left_btn" aria-hidden="true"></i>', '<i class="fa fa-chevron-right right_btn" aria-hidden="true"></i>' ],
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
  
  
      $('#owl-two').owlCarousel({
        margin:15,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-chevron-left left_btn" aria-hidden="true"></i>', '<i class="fa fa-chevron-right right_btn" aria-hidden="true"></i>' ],
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    });    
    
    $('#owl-three').owlCarousel({
        margin:15,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-chevron-left left_btn" aria-hidden="true"></i>', '<i class="fa fa-chevron-right right_btn" aria-hidden="true"></i>' ],
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    });  
    
    $('#owl-four').owlCarousel({
        margin:10,
        loop:true,
        nav:false,
        dots:false,
        navText:[0],
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    });


// bookacareSlider
$('#bookacareSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Calculator page slider
$('#carculator').owlCarousel({
    margin:10,
    loop:true,
    nav:true,
    navText:['<i class="fa fa-chevron-left left_btn" aria-hidden="true"></i>', '<i class="fa fa-chevron-right right_btn" aria-hidden="true"></i>' ],
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoWidth:true,
    items:3,
})