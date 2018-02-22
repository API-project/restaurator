const Restaurant = require('../models/restaurants.model');;
const path = require('path');

module.exports.index = (req, res) => {
  Restaurant.find({}).sort( { rating: -1 } ).then((restaurants) => {
    res.render("home", {
      restaurants: restaurants
    });
  });
  };
