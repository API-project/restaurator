const Restaurant = require('../models/restaurants.model');

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCscTbTrX-GiGtgj9E2v6ZmKUoz5xv7b4w',
  Promise: Promise,
});

module.exports.run = () => {
    console.log('find places...');
    var chamberi = {
      lat: 40.43623,
      lng: -3.721604
    };
    googleMapsClient.placesNearby({
        location: chamberi,
        radius: 1000,
        type: 'meal_delivery'

      }).asPromise()
          .then(function(response) {
        // console.log("------------------- GOOGLE -------------------");
        // console.log(`${JSON.stringify(response.json.results)}`);
        // console.log("------------------- FIN GOOGLE -------------------");

          console.log(response.json.results[0].name);

        Restaurant.count({ name: response.json.results.name })
          .then(result => {
              console.log(result);
              if (result !== 0) {
              console.log("ya exitía");
                } else {
                  for (i = 0; i < response.json.results.length; i++) {
                              const googleResponse = response.json.results[i];
                              const newRestaurant = new Restaurant({
                                name: googleResponse.name,
                                rating: googleResponse.rating,
                                direction: googleResponse.vicinity,
                              });
                              newRestaurant.save()
                                .then(result => {
                                  console.log(`This is the ${result.name} restaurant.`);
                                })
                                .catch(err => {
                                  console.log(err)
                                  error: "Something went wrong"
                                });
                          }
                }
            }).catch(err => {
                  console.log("algo fue mal en el catch");
            });





        // for (var i = 0; i < response.json.results.length; i++) {
        // Restaurant.count({name: response.json.results[i].name})
        //   .then(result => {
        //     if (!result) {
        //       const googleResponse = response.json.results[i];
        //                const newRestaurant = new Restaurant({
        //                  name: googleResponse.name,
        //       //           //imageUrl: googleResponse.imageUrl,
        //       //           //location: googleResponse.location,
        //                  opening_hours: googleResponse.opening_hours.open_now,
        //                  rating: googleResponse.rating,
        //                  direction: googleResponse.vicinity,
        //                })
        //                console.log('Restaurante guardado correctamente');
        //                console.log(newRestaurant);
        //                         newRestaurant.save()
        //                           .then(result => {
        //                             console.log(`This is the ${result.name} restaurant.`);
        //                //             //res.redirect("restaurants/index");
        //                           })
        //                           .catch(err => {
        //                             console.log(err)
        //                //             //res.render("restaurants/new", {
        //                             error: "Something went wrong"
        //                           });
        //                       //  });
        //                      //};
        //     } else {
        //       console.log("------------------- Restaurant -------------------");
        //       console.log(`${result}`);
        //       console.log(response.json.results[0].opening_hours.open_now);
        //       console.log(response.json.results[0].photos);
        //       console.log(response.json.results[0].geometry.location);
        //       console.log("------------------- Restaurant YA ESTABA -------------------");
        //
        //     }



          })
          .catch(err => {
            console.log('Ha ocurrido un error')
            console.log(err)
          })
        }
    //  })
    //     for (i = 0; i < response.json.results.length; i++) {
    //       //console.log(response.json.results[0].location);
    //       if (response.json.results.name !== null) {
    //         console.log(`el restaurante ${response.json.results[i].name} ya existe`);
    //       } else {
    //         const googleResponse = response.json.results[i];
    //         const newRestaurant = new Restaurant({
    //           name: googleResponse.name,
    //           //imageUrl: googleResponse.imageUrl,
    //           //location: googleResponse.location,
    //           opening_hours: googleResponse.opening_hours.open_now,
    //           rating: googleResponse.rating,
    //           direction: googleResponse.vicinity,
    //         });
    //
    //         // console.log(response.json.results[0].geometry.location);
    //         // console.log(response.json.results[0].name);
    //         // console.log(response.json.results[0].opening_hours.open_now);
    //         // console.log(response.json.results[0].rating);
    //         // console.log(response.json.results[0].vicinity);
    //         //console.log('Restaurante guardado correctamente')
    //         //console.log(newRestaurant)
    //         newRestaurant.save()
    //           .then(result => {
    //             console.log(`This is the ${result.name} restaurant.`);
    //             //res.redirect("restaurants/index");
    //           })
    //           .catch(err => {
    //             console.log(err)
    //             //res.render("restaurants/new", {
    //             error: "Something went wrong"
    //           });
    //         //});
    //       };
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     //res.render("restaurants/new", {
    //     error: "Something went wrong"
    //   });
    // }
