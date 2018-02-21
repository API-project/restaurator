const Restaurant = require('../models/restaurants.model');

module.exports.result = (req, res) => {

  // console.log(req.body[0].name);
  // console.log(req.body[0].rating);
  // console.log(req.body[0].direction);
  // console.log(req.body[0].imageUrl);
  // console.log(req.body[0].location);
  // console.log(req.body[0].place_id);

  const newRestaurant = new Restaurant({
                          name: req.body[0].name,
                          rating: req.body[0].rating,
                          direction: req.body[0].direction,
                          imageUrl: req.body[0].imageUrl,
                          location: req.body[0].location,
                          place_id: req.body[0].place_id,
                        })
                        newRestaurant.save();

  // Restaurant.count({ place_id: req.body.place_id })
  //   // .then(res => {
  //   //     console.log(res);
  //       if (res !== 0) {
  //       console.log("ya exitía");
  //         } else {
  //           for (i = 0; i < req.body.length; i++) {
  //                       const newRestaurant = new Restaurant({
  //                         name: req.body[i].name,
  //                         rating: req.body[i].rating,
  //                         direction: req.body[i].vicinity,
  //                         imageUrl: req.body[i].photos,
  //                         location: req.body[i].geometry,
  //                         place_id: req.body[i].place_id,
  //                       });
  //                       newRestaurant.save()
  //                         .then(res => {
  //                           console.log(`This is the ${result.name} restaurant.`);
  //                           console.log(`${JSON.stringify(req.body.geometry.location)}`);
  //                         })
  //                         .catch(err => {
  //                           console.log(err)
  //                           error: "Something went wrong"
  //                         });
  //                   }
  //         }
  //     // }).catch(err => {
  //     //       console.log("algo fue mal en el catch");
  //     // });


  res.sendStatus(200);


};
