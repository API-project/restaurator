const Home = require('../models/home.model');
const path = require('path');

module.exports.index = (req, res) => {
  res.render("home", {
    Home
  });
  };
