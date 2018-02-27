const Restaurant = require('../models/restaurants.model');
const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;
const path = require('path');



module.exports.index = (req, res) => {
  Restaurant.find({}).sort( { rating: -1 } )
  .then((restaurants) => {
    res.render("restaurants/index", {
      restaurants: restaurants
    });
  }).catch(error => next(error));
};


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
    .then((user) => {
      console.log(user)
      res.render('restaurants/index', {
          user: user
      });
    })
    .catch(err => { next(err) })
}

module.exports.show = (req, res, next) => {
  User.find({})
  .then((user) => {
    Restaurant.find({})
    .populate('favourite')
    .then((restaurants) => {
          // console.log(restaurants)
            res.render('restaurants/show', {
                user: user,
                restaurants: restaurants
            });
        })
        .catch((error) => {
            res.redirect('/');
            next(error);
            })
        })
      .catch((error) => {
          res.redirect('/');
          next(error);
      })
};
