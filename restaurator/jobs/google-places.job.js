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
        for (i = 0; i < response.json.results.length; i++) {
          if (response.json.results.name !== null) {
            console.log(`el restaurante ${response.json.results[i].name} ya existe`);
          } else {
            const newRestaurant = new Restaurant({
              name: response.json.results[i].name,
              //imageUrl: response.body.imageUrl,
              //location: response.json.results.geometry.location,
              //hours: response.json.results[0].opening_hours.open_now,
              rating: response.json.results[i].rating,
              direction: response.json.results[i].vicinity,
            });

            // console.log(response.json.results[0].geometry.location);
            // console.log(response.json.results[0].name);
            // console.log(response.json.results[0].opening_hours.open_now);
            // console.log(response.json.results[0].rating);
            // console.log(response.json.results[0].vicinity);
            //console.log('Restaurante guardado correctamente')
            //console.log(newRestaurant)
            newRestaurant.save()
              .then(result => {
                console.log(`This is the ${result.name} restaurant.`);
                //res.redirect("restaurants/index");
              })
              .catch(err => {
                console.log(err)
                //res.render("restaurants/new", {
                error: "Something went wrong"
              });
            //});
          };
        }
      })
      .catch(err => {
        console.log(err)
        //res.render("restaurants/new", {
        error: "Something went wrong"
      });
    }
