const Home = require('../models/home.model');

module.exports.index = (req, res) => {
  res.render("home", {
    Home
  });
  };
