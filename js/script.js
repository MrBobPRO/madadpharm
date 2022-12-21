// Partners carousel
let partnersCarousel = $('.partners-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 4,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    991: {
      items: 4
    }
  }
});


const partnersNavs = document.querySelector('.partners-carousel__navs');

partnersNavs.querySelector('.carousel-navs__item--prev')
  .addEventListener('click', () => partnersCarousel.trigger('prev.owl.carousel'));

partnersNavs.querySelector('.carousel-navs__item--next')
  .addEventListener('click', () => partnersCarousel.trigger('next.owl.carousel'));

// Google Maps
let map = document.getElementById("map");
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38.56583369509809,
      lng: 68.78712883519702
    },
    zoom: 15,
    mapTypeControl: false,
    streetViewControl: false
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.BOUNCE,
    position: {
      lat: 38.56583369509809,
      lng: 68.78712883519702
    },
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


//scroll top
document.querySelector('.scroll-top')
  .addEventListener('click', function () {
    document.body.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });