const User = require('../models/user.model')
const Restaurant = require('../models/restaurants.model');

module.exports.index = (req, res, next) => {
  res.render('profile/profile', { title: 'Express' });
};


module.exports.paintRestaurants = (req, res) => {
  User.find({favourite:""}).then((restaurants) => {
    console.log(favorite);
  });
};
