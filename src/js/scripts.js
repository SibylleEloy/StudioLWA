// Owl Carousel
// Initialization of Owl carousel function

jQuery(document).ready(function() {
  jQuery(".owl-carousel").owlCarousel({
    // autoplay: true,
    // autoplayhoverpause: true,
    // autoplaytimeout: 100,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
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

// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });


// Scroll-Linked Animation

// Polyfill for browsers with no Scroll-Timeline support
// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import 'https://rawcdn.githack.com/flackr/scroll-timeline/94866999efe41b3ccba846be7ed37c9313dd880e/dist/scroll-timeline.js';

// Animate Clips on Scroll

// const $slides = document.querySelectorAll('.mySlides')
// const $clips = document.querySelectorAll('.clip')

// // // Creating and attaching a scroll timeline
// const ScrollTimeline = new ScrollTimeline({
//   source: $slides,
//   timeRange: 1,
//   orientation: 'inline',
//   fill: 'both',
//   scrollOffsets: [
//     { target: $clips, edge: 'end', threshold: 0 },
//     { target: $clips, edge: 'start', threshold: 0 },
//   ],
// });

// // //  To attach our newly-created ScrollTimeline instance to an animation, we pass it as the second argument into the Animation constructor
// new Animation(
//   new KeyframeEffect(
//     $clips,
//     {
//       transform: [
//         'rotateY(-45deg) translateX(-100%)',
//         'rotateY(-45deg) translateX(0)',
//         'rotateY(0deg) translateZ(1em) scale(1.5)',
//         'rotateY(45deg) translateX(0)',
//         'rotateY(45deg) translateX(100%)',
//       ],
//     },
//     { duration: 1, fill: 'both' }
//   ),
//   ScrollTimeline
// ).play();

// // When using the Element.animate() syntax, set it as the timeline option in the options objec
// document.querySelectorAll('.clip').animate(
//   {
//     transform: ['rotate(0)', 'rotate(90)']
//   },
//   {
//     duration: 1,
//     fill: 'forwards',
//     timeline: myScrollTimeline,
//   }
// );



//  -------------------- 

// Classic slider
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   const slides = document.getElementsByClassName('mySlides');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slides[slideIndex - 1].style.display = 'block';
// }



