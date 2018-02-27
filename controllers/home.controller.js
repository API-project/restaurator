const Restaurant = require('../models/restaurants.model');;
const path = require('path');

module.exports.index = (req, res) => {
  Restaurant.find({}).then((restaurants) => {
    res.render("home", {
      restaurants: restaurants
    });
  });
  };
