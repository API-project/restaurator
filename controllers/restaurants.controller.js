const Restaurant = require('../models/restaurants.model');
const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;
const path = require('path');





module.exports.new = (req, res) => {
  res.render('restaurants/new', {
    restaurant: new Restaurant(),
    error: {}
  });
};

module.exports.create = (req, res) => {
  console.log(req.body)
  new Restaurant({
   name: req.body.name,
   description: req.body.description,
   categories: req.body.categories,
   direction: req.body.direction,
 }).save()
   .then((restaurant) => {
     console.log("el restaurante se creó");
     res.redirect("/");
   })
   .catch((err) => {
     res.render('restaurants/new', {
       err: err,
     });
   });
};

module.exports.index = (req, res) => {
  Restaurant.find({}).sort( { rating: -1 } )
  .then((restaurants) => {
    res.render("restaurants/index", {
      restaurants: restaurants
    });
  }).catch(error => next(error));
};

// module.exports.edit = (req, res, next) => {
//   Restaurant.findById(req.params.id).then((restaurant) => {
//     res.render('restaurants/new', {
//       restaurant: restaurant
//     }).catch(err => {
//       console.log(err)
//       res.render("restaurants/new", {
//         error: "Something went wrong"
//       });
//     });
//   });
// };


module.exports.delete = (req, res, next) => {
Restaurant.findByIdAndRemove(req.params.id)
    .then((restaurants) => {
        res.render('restaurants/index', {
            restaurants: restaurants
        });
    })
    .catch((error) => {
        res.redirect('/');
        next(error);
    })
};


// module.exports.pic = (req, res) => {
//   Restaurant.findById(req.params.id)
//   .then((restaurant) => {
//     res.sendFile(path.join(__dirname, '../', restaurant.file));
//   });
// }

module.exports.like = (req, res, next) => {
  const restaurantId = req.params.id;
  User.findByIdAndUpdate(req.user._id, { $push: { favourite: restaurantId } })
    .then(user => {
      res.redirect('/')
    })
    .catch((error) => {
        res.redirect('/');
        next(error);
        })
}

module.exports.show = (req, res, next) => {
    Restaurant.findOne({ restaurant: req.params.restaurant})
        .then((restaurant) => {
          console.log(restaurant)
            res.render('restaurants/show', {
                restaurant: restaurant
            });
        })
        .catch((error) => {
            res.redirect('/');
            next(error);
        })
};
