
// Main Script Jquery

$(document).ready(function(){

  // == Nice Scroll
  $(".doNicescroll").niceScroll({
    cursorcolor:"#e035a0",
    cursorwidth:"4px",
    cursorborder:"0px solid",
    cursorborderradius:0
  });
  // == Scroll Event
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navbar").addClass("bg_hiphone");
        $(".button_up").addClass("d-block");
    } else {
        $(".navbar").removeClass("bg_hiphone");
        $(".button_up").removeClass("d-block");
    }
  });
  // == Button Up
  $(".button_up").click(function(){
    $(window).scrollTop(0);
  });
  // =================================
  // Swiper 3 Sliders
  var swiper = new Swiper('.swiper-container', {
     slidesPerView: 3,
     spaceBetween: 20,
     slidesPerGroup: 1,
     loop: true,
     loopFillGroupWithBlank: true,

     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

     breakpoints: {
       1024: {
         slidesPerView: 3,
         spaceBetween: 10,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 15,
       },
       760: {
         slidesPerView: 1,
         spaceBetween: 20,
       },
       320: {
         slidesPerView: 1,
         spaceBetween: 5,
       }
     }
   });
   // Swiper 5 Sliders
   var swiper = new Swiper('.swiper-container-5slider', {
      slidesPerView: 5,
      spaceBetween: 50,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 5,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        }
      }
    });
  // =================================

  // == Preloader Hide
  $('.preloader').delay(20000).fadeOut(300);

});
