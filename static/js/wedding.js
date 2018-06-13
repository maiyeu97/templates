
$(document).ready(function () {
  $('.particleground').particleground({
    dotColor: '#5e9a8e',
    lineColor: '#5e9a8e',
    directionX: 'center',
    directionY: 'center',
    density: 7000,
    parallax: true,
    particleRadius: 7,
    lineWidth: 1,
    parallaxMultiplier: 5,
  });

  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});

function popupSaveTheDateCircle() {
  var saveTheDateCircle = $(".save-the-date");
  saveTheDateCircle.addClass("popup-save-the-date");
}

$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
  loop: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items:1,
  margin:30,
  stagePadding:30,
  smartSpeed:450
});
