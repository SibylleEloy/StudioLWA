// Owl Carousel
// Initialization of Owl carousel function

// $('.mySlides').owlCarousel({
//   autoplay: true,
//   autoplayhoverpause: true,
//   autoplaytimeout: 100,
// });

// $('.owl-carousel').owlCarousel({
//   autoplay: true,
//   autoplayhoverpause: true,
//   autoplaytimeout: 100,
// });

// (function ($) {
//   function initOwlCarousel() {
//     $('.owl-carousel').owlCarousel();
//   }

//   $(document).ready(() => {
//     initOwlCarousel();
//   });
// })(jQuery);
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:5
//         }
//     }
// })

jQuery(document).ready(function() {
  jQuery(".owl-carousel").owlCarousel({
    // autoplay: true,
    // autoplayhoverpause: true,
    // autoplaytimeout: 100,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
  });
});