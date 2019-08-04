$(document).ready(function() {
  $('.slider-top').owlCarousel({
   loop: true,
   margin: 10,
   nav:true,
   navText : ['<i class="fa fa-2x fa-chevron-left"></i>','<i class="fa fa-2x fa-chevron-right"></i>'],
   dots:true,
   autoplay:true,
   items:1,
   responsiveClass: true,
 })
  $('.slider-news').owlCarousel({
   loop: true,
   margin: 10,
   nav:false,
   dots:true,
   autoplay:true,
   autoplayTimeout:4000,
   smartSpeed:2500,
   items:1,
   responsiveClass: true,
   responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
      margin: 20
    }
  }
})
})

// go-top
$(document).ready(function() {
  var scrollTop = $(".scrollTop");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "0.7");

    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); 
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
  // end-top
  // menu
  $(function() {
    $('nav#menu').mmenu({
      extensions  : [ 'effect-slide-menu', 'pageshadow' ],
      searchfield : true,
      counters  : false,
      navbar    : {
        title : 'PT GAS'
      },
      offCanvas   : {
        position: "right"
      },
      navbars   : [
      {
        position  : 'top',
        content   : [ 'searchfield' ]
      }, {
        position  : 'top',
        content   : [
        'prev',
        'title',
        'close'
        ]
      }
      ]
    });
  });


  $(document).ready(function(){
    $(".click_search").click(function(){
      $(".search").slideToggle("slow");
    });
  });
  // slider-detail
  $(document).ready(function () {
    productSlider = $("#product_slider").lightSlider({
        gallery             : true,
        item                : 1,
        loop                : true,
        thumbItem           : 4,
        slideMargin         : 0,
        enableDrag          : true,
        currentPagerPosition: 'center',
        adaptiveHeight      : true,
        onSliderLoad        : function (el) {
            el.lightGallery({
                selector: '#product_slider .lslide'
            });
        }
    });

    $('.swatch:first-child').click();
});


  