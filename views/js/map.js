var map;

function initMap() {
  // Create the map.
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.714, lng: -74.005},
    mapTypeId: 'terrain'
  });
}

function drawCircle(distance){
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center:  {lat: 40.714, lng: -74.005},
      radius: distance * 1609
  });
}
