const Restaurant = require('../models/restaurants.model');
const ElTenedor = require('../models/eltenedor.model');
const Dishes = require('../models/dishes.model');
const JustEat = require('../models/justeat.model');

const async = require('async');


module.exports.result = (req, res, next) => {
  const restaurantsArray = req.body;

  async.eachSeries(restaurantsArray, function filterId (restaurant, done) {
    Restaurant.findOne({
        place_id: restaurant.place_id
    })
      .then(foundRestaurant => {
        if (foundRestaurant) {
          console.log('It already exists');
        } else {
          // const imageUrl =
          // restaurant.imageUrl && restaurant.imageUrl[0].html_attributions[0]
          //   ? restaurant.imageUrl[0].html_attributions[0]
          //   : '';
          const location = {
            lat: restaurant.location.location.lat,
            lng: restaurant.location.location.lng,
          }
          // Used for querying ElTenedor & JustEat.
          const geo_location = {
            lat: location.lat.toFixed(7),
            lon: location.lng.toFixed(7)
          };
          ElTenedor.findOne({geo_location})
            .then(eltenedor => {
              geo_location['lon'] = geo_location.lon.slice(0, geo_location.lon.length - 1);
              const categories = eltenedor ? eltenedor.categories : [];
              const reservation = eltenedor ? eltenedor.reservation : [];
              JustEat.findOne({geo_location})
                .then(justeat => {
                  const href = justeat ? justeat.href : '';
                  Dishes.findOne({geo_location})
                    .then(dishes => {
                      const imageUrl = dishes ? dishes.imageUrl : '';
                  const newRestaurant = new Restaurant({
                     name: restaurant.name,
                     rating: restaurant.rating,
                     direction: restaurant.direction,
                     imageUrl,
                     location,
                     place_id: restaurant.place_id,
                     categories,
                     href,
                     reservation,
                   });

                  newRestaurant.save()
                    .then(() => {
                      console.log(`${newRestaurant.name} creado`);

                    })
                    .catch(err => {next(err)})
                })
                .catch(err => {next(err)})
            })
            .catch(err => {next(err)})
          })
          .catch(err => {next(err)})
        }
      })
      .catch(err => {next(err)})
      done();
  }, function allDone (err) {
    console.log('done');
  });
};
