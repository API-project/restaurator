const Restaurant = require('../models/restaurants.model');

module.exports.index = (req, res, next) => {
  res.render('restaurants/index');
};
