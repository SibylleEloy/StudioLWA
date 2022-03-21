// Owl Carousel
// Initialization of Owl carousel function
// Scroll-Linked Animation polyfill

// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// $('.mySlides').owlCarousel({
//   autoplay: true,
//   autoplayhoverpause: true,
//   autoplaytimeout: 100,
// });

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

// Scroll-Linked Animation

// document.querySelector('.clip').animate(
//   {
//     transform: ['rotate(45deg)'],
//   },
//   {
//     duration: 2500,
//     fill: 'forwards',
//     easing: 'linear',
//   }
// );

// // Creating and attaching a scroll timeline
// const myScrollTimeline = new ScrollTimeline({
//   source: document.scrollingElement,
//   orientation: 'block',
//   scrollOffsets: [
//     new CSSUnitValue(0, 'percent'),
//     new CSSUnitValue(100, 'percent'),
//   ],
// });

// //  To attach our newly-created ScrollTimeline instance to an animation, we pass it as the second argument into the Animation constructor
// new Animation(
//   new KeyframeEffect(
//     document.querySelector('#progress'),
//     { transform: ['scaleY(0)', 'scaleY(1)'] },
//     { duration: 1, fill: 'forwards' }
//   ),
//   myScrollTimeline
// ).play();

// // When using the Element.animate() syntax, set it as the timeline option in the options objec
// document.querySelector('.clip').animate(
//   {
//     transform: ['scaleY(0)', 'scaleY(1)'],
//   },
//   {
//     duration: 1,
//     fill: 'forwards',
//     timeline: myScrollTimeline,
//   }
// );
