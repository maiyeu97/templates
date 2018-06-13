window.onscroll = function() {
  myFunction()
};

var header = document.getElementById("Header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky", "transition-tranperant");

  } else {
    header.classList.remove("sticky", "transition-tranperant");
  }
}
$('.owl-carousel').owlCarousel({
  autoplay: true ,
  autoplayTimeout:1000,
  center: true,
  loop: true,
  nav: true,
  item:4,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

function initialize() {
    var myLatlng = new google.maps.LatLng(21.0444974, 105.8009927);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var contentString = "<table><tr><th>Số 1 Phùng Chí Kiên</th></tr><tr><td>Nghĩa Đô-Cầu Giấy-Hà Nội-Việt Nam</td></tr></table>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Số 1 Phùng Chí Kiên'
    });
    google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
}

google.maps.event.addDomListener(window, 'load', initialize);
