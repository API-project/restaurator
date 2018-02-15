
var map;

  function initMap() {
    var chamberi = {lat: 40.43623, lng: -3.721604};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(40.4337911, -3.7012627),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
              location: chamberi,
              radius: 1000,
              type: ['restaurant']
            }, callback);

    // service.getDetails({placeId: 'ChIJZ3Wh-V8oQg0RwVByFBg-6xM'}, callback);

  }

  function callback(results, status) {
    console.log("entra en callback")
    // if (status === google.maps.places.PlacesServiceStatus.OK) {
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     position: place.geometry.location
    //   });
      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      //     'Place ID: ' + place.place_id + '<br>' +
      //     place.formatted_address + '</div>');
      //   infowindow.open(map, this);
      // });

    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }

    }

    function createMarker(place) {
       console.log(place);
      // place = new Place();
      // place.setId(place.place_id);
      // place.setName(place.name);


      // const places = []
      // places.push(place)

    }
//
//
//         var marker, i;
//
// for (i = 0; i < locations.length; i++) {
// 	marker = new google.maps.Marker({
// 		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 		map: map
// 	});
//
// 	google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 		return function () {
// 			infowindow.setContent(locations[i][0]);
// 			infowindow.open(map, marker);
// 		}
// 	})(marker, i));
// }
