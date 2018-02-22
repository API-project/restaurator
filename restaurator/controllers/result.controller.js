const Restaurant = require('../models/restaurants.model');

module.exports.result = (req, res) => {
  console.log(req.body[0].name)
  const {
    name,
    rating,
    direction,
    imageUrl,
    location,
    place_id
  } = req.body;
  // console.log(req.body[0].name);
  // console.log(req.body[0].rating);
  // console.log(req.body[0].direction);
  // console.log(req.body[0].imageUrl);
  // console.log(req.body[0].location);
  // console.log(req.body[0].place_id);

  Restaurant.findOne({place_id: req.body.place_id}, (err, restaurant) => {
    if (restaurant !== null) {
      console.log(`the restaurant ${req.body[0].name} already exists`);
    }else{
      for (i = 0; i < req.body.length; i++) {
      const newRestaurant = new Restaurant({
                              name: req.body[i].name,
                              rating: req.body[i].rating,
                              direction: req.body[i].direction,
                              imageUrl: req.body[i].imageUrl,
                              location: req.body[i].location,
                              place_id: req.body[i].place_id,
                            })
                            newRestaurant.save()
                            .then(result => {
                              console.log(`Restaurante ${req.body.name} guardado correctamente`)
                              res.redirect("restaurants/index");
                            })
                            .catch(err => {
                              console.log(err)
                              res.render("restaurants/new", {
                                error: "Something went wrong"
                              });
                            });
          }
    }
  })
  res.sendStatus(200);

};
