// jQuery(document).ready(function($) {
//              $('.start-slider').owlCarousel({
//                loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:false
//                 // autoplayTimeout:6000
//               });
//               $('.first-slider').owlCarousel({
//               loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:true,
//                 autoplayTimeout:6000
//               });
//               $('.second-slider').owlCarousel({
//               loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:true,
//                 autoplayTimeout:5000
//               });
//               $('.third-slider').owlCarousel({
//               loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:true,
//                 autoplayTimeout:3000
//               });
//               $('.fourth-slider').owlCarousel({
//               loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:true,
//                 autoplayTimeout:4000
//               });
//                $('.five-slider').owlCarousel({
//               loop: true,
//                 navText : ['<i class="fe fe-arrow-left" aria-hidden="true"></i>','<i class="fe fe-arrow-right" aria-hidden="true"></i>'],
//                 items: 1,
//                 nav: true,
//                 autoplay:true,
//                 autoplayTimeout:5000
//               });






//             });

$(document).ready(function(){
  $('#first-slider').carousel({
    interval: 2000,
    keyboard: false,
    pause: hover
  });
  $('#start-slider').carousel({
    interval: 2000,
    keyboard: false,
    pause: hover
  });
})