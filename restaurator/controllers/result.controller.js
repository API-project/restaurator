const Restaurant = require('../models/restaurants.model');
const ElTenedor = require('../models/eltenedor.model');

//const DatasetExCompany = require('../lib/11870.fakeapi');

module.exports.result = (req, res) => {
  const {
    name,
    rating,
    direction,
    imageUrl,
    location,
    place_id,
    category
  } = req.body;
  // console.log(req.body[0].name);
  // console.log(req.body[0].rating);
  // console.log(req.body[0].direction);
  // console.log(req.body[0].imageUrl);
  // console.log(req.body[0].location);
  // console.log(req.body[0].place_id);

  Restaurant.findOne({
      place_id: req.body.place_id
    })
    .then(restaurant => {
        if (restaurant !== null) {
          console.log(`the restaurant ${req.body[0].name} already exists`);
        } else {
          for (i = 0; i < req.body.length; i++) {
            const newRestaurant = new Restaurant({
              name: req.body[i].name,
              rating: req.body[i].rating,
              direction: req.body[i].direction,
              imageUrl: req.body[i].imageUrl,
              location: req.body[i].location,
              place_id: req.body[i].place_id,
            });
            console.log(newRestaurant);
            ElTenedor.findOne({"name": "Telepizza"}).then(resultsRest => {
              console.log("Res -> El tenedor ", resultsRest);
              if (newRestaurant.name === resultsRest.name) {
                newRestaurant.category = resultsRest.categories;
                console.log(`the categories are ${newRestaurant.category}`)
              } else {
                console.log("No he encontrado el restaurante ", newRestaurant.name);
              }
            }).catch(err => {})
      // ElTenedor.findOne({name: newRestaurant.name}).then((result) => {
      // })
      // .catch(err => {
      //   console.log(err) {
      //     error: "Something went wrong"
      //   }
      // });

            newRestaurant.save()
              .then(result => {
                console.log(`Restaurante ${req.body.name} guardado correctamente`)
                res.redirect("restaurants/index");
              })
              .catch(err => {});
          }
        }
      }).catch(err => {
        console.log(err)
      });

    };
