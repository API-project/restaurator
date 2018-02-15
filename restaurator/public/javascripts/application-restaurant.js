// 
// function initMap() {
//
// var perrachica = {
//     info: '<strong>Perrachica</strong><br>\
//           Calle Eloy Gonzalo, 10 <br> 28010 Madrid<br>\
//           <a href="https://www.google.es/maps/place/Perrachica">Ver dirección</a>',
//     lat: 40.4330606,
//     long: -3.7026527
//   };
//
//   var mamacampo = {
//     info: '<strong>Mama Campo</strong><br>\
//           Calle de Trafalgar, 22 <br> 28010 Madrid<br>\
//           <a href="https://www.google.es/maps/place/Mama+Campo">Ver dirección</a>',
//     lat: 40.4323291,
//     long: -3.7028516
//   };
//
//   var bacira = {
//     info: '<strong>Bacira</strong><br>\r\
//           Calle del Castillo, 16 <br> 28010 Madrid<br>\
//           <a href="https://www.google.es/maps/place/Bacira">Ver dirección</a>',
//     lat: 40.4337911,
//     long: -3.7012627
//   };
//
//
// var locations = [
// [perrachica.info, perrachica.lat, perrachica.long, 0],
// [mamacampo.info, mamacampo.lat, mamacampo.long, 1],
// [bacira.info, bacira.lat, bacira.long, 2],
// ];
//
// var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 13,
// 		center: new google.maps.LatLng(40.4337911, -3.7012627),
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	});
//
// 	var infowindow = new google.maps.InfoWindow({});
//
// 	var marker, i;
//
// 	for (i = 0; i < locations.length; i++) {
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 			map: map
// 		});
//
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				infowindow.setContent(locations[i][0]);
// 				infowindow.open(map, marker);
// 			}
// 		})(marker, i));
// 	}
//
// }
