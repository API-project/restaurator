var map;
var perrachica = {
    info: '<strong>Perrachica</strong><br>\
          Calle Eloy Gonzalo, 10 <br> 28010 Madrid<br>\
          <a href="https://www.google.es/maps/place/Perrachica">Ver dirección</a>',
    lat: 40.4330606,
    long: -3.7026527
  };

  var mamacampo = {
    info: '<strong>Mama Campo</strong><br>\
          Calle de Trafalgar, 22 <br> 28010 Madrid<br>\
          <a href="https://www.google.es/maps/place/Mama+Campo">Ver dirección</a>',
    lat: 40.4323291,
    long: -3.7028516
  };

  var bacira = {
    info: '<strong>Bacira</strong><br>\r\
          Calle del Castillo, 16 <br> 28010 Madrid<br>\
          <a href="https://www.google.es/maps/place/Bacira">Ver dirección</a>',
    lat: 40.4337911,
    long: -3.7012627
  };


var locations = [
[perrachica.name, perrachica.lat, perrachica.long, 0],
[mamacampo.info, mamacampo.lat, mamacampo.long, 1],
[bacira.info, bacira.lat, bacira.long, 2],
];

  function initMap() {
    var chamberi = {lat: 40.434137, lng: -3.703253};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(40.4337911, -3.7012627),
      zoom: 15,
      // styles: [{
      //   stylers: [{ visibility: 'simplified' }]
      // }, {
      //   elementType: 'labels',
      //   stylers: [{ visibility: 'off' }]
      // }],
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });




    var infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
              location: chamberi,
              radius: 1000,
              type: ['meal_delivery']
            }, callback);

             var marker, i;

             function callback(results, status) {
               if (status !== google.maps.places.PlacesServiceStatus.OK) {
                 console.error(status);
                 return;
               }
               for (var i = 0, result; result = results[i]; i++) {
                 addMarker(result);
               }
             }

             function addMarker(place) {
               var marker = new google.maps.Marker({
                 map: map,
                 position: place.geometry.location,
                 icon: {
                   url: 'https://cdn.onlinewebfonts.com/svg/img_19509.png',
                   anchor: new google.maps.Point(10, 10),
                   scaledSize: new google.maps.Size(40, 47)
                 }
               });
             }


          // for (i = 0; i < locations.length; i++) {
          // marker = new google.maps.Marker({
          // position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          // map: map
          // });

          google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          }
          })(marker, i));
          //}
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

    function createMarker() {
      var marker, i;

    for (i = 0; i < results.length; i++) {
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(results[i][1], results[i][2]),
    map: map
    });

      // console.log(place);
      // place = new Place();
      // place.setId(place.place_id);
      // place.setName(place.name);


       // const places = []
       // places.push(place)

    }



 }
