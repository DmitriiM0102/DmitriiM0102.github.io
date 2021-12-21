$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    slidesToShow: 4,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
})