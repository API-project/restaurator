
var map, places, infoWindow, xx;
var markers = [];
var autocomplete;
var countryRestrict = {
  'country': 'ES'
};
var MARKER_PATH = 'https://i1.wp.com/www.hentiesbaytourism.com/wp-content/uploads/2016/06/restaurant_marker';
var hostnameRegexp = new RegExp('^https?://.+?/');

class googleData {
  constructor(name,rating,direction,location,place_id,imageUrl) {
    this.name = name;
    this.rating = rating;
    this.direction = vicinity;
    this.location = location;
    this.place_id = place_id;
    this.imageUrl = photos;
  }
  checkGoogleData() {
    console.log(`Hello! It's ${this.name} (${this.rating})`);
  }
}

// let googleData = new GoogleData();


var countries = {

  'ES': {
    center: {
      lat: 40.43623,
      lng: -3.721604
    },
    zoom: 10
  },

};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['ES'].zoom,
    center: countries['ES'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (
      document.getElementById('autocomplete')), {
      types: ['(regions)'],
      componentRestrictions: countryRestrict
    });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

  // Add a DOM event listener to react when the user selects a country.
  document.getElementById('country').addEventListener(
    'change', setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById('autocomplete').placeholder = "Chamberi, Chamartin ...";
  }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
  var search = {
    bounds: map.getBounds(),
    types: ['meal_delivery']
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (var i = 0; i < results.length; i++) {
        //var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH  + '.png';
        // Use marker animation to drop the icons incrementally on the map.
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.BOUNCE,
          icon: {
                   url: MARKER_PATH  + '.png',
                   anchor: new google.maps.Point(10, 10),
                   scaledSize: new google.maps.Size(40, 47)
               }

        });

        // If the user clicks a hotel marker, show the details of that hotel
        // in an info window.
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);

        //console.log(results[i]);

      }
      //transfromToObject(results);
      // console.log(saveIntoArray(results));


      // function transfromToObject(results){
      //   for(i=0; i<results.length; i++) {
      //     console.log(results[i].name);
      //     console.log(results[i].rating);
      //     console.log(results[i].vicinity);
      //     console.log(results[i].place_id);
      //     console.log(results[i].photos);
      //     console.log(results[i].geometry.location);
      //   }
      // }

       function saveIntoArray(results) {
       var xx = [];

       for (var i = 0; i < results.length; i++) {
         var data = {"name":"","rating":"","direction":"","place_id":"","imageUrl":"","location":""};
        // console.log(data);
        data.name = results[i].name;
        data.rating = results[i].rating;
        data.direction = results[i].vicinity;
        data.place_id = results[i].place_id;
        data.imageUrl = results[i].photos;
        data.location = results[i].geometry;

        xx.push(data);


    }
    return xx;
  };


    //  console.log(results[0]);
      jQuery.post({
        url: "/result",
         data: JSON.stringify(saveIntoArray(results)),
         contentType: 'application/json',
        success: function(response) {
          // console.log(response);
        },
        error: function(err) {
          console.log(err);
        },
      })

    }
  });
}


function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  var country = document.getElementById('country').value;
  if (country == 'all') {
    autocomplete.setComponentRestrictions([]);
    map.setCenter({
      lat: 15,
      lng: 0
    });
    map.setZoom(2);
  } else {
    autocomplete.setComponentRestrictions({
      'country': country
    });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  var results = document.getElementById('results');
  //var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + '.png';




  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
  var removListing = document.getElementById("listing");
  removListing.style.display = "none";
}

function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  var marker = this;
  places.getDetails({
      placeId: marker.placeResult.place_id
    },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}

$(document).ready(function(){
  $("btn-floating").click(function() {
     $('html,body').animate({
         scrollTop: $(".second").offset().top},
         'slow');
 });


   $('modal').modal('open');
   $('modal').modal('close');
   $('.modal').modal(
     {
           dismissible: true, // Modal can be dismissed by clicking outside of the modal
           opacity: .5, // Opacity of modal background
           inDuration: 300, // Transition in duration
           outDuration: 200, // Transition out duration
           startingTop: '4%', // Starting top style attribute
           endingTop: '10%', // Ending top style attribute
           ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
             alert("Ready");
             console.log(modal, trigger);
           },
           complete: function() { alert('Closed'); } // Callback for Modal close
         }

   );
 });
