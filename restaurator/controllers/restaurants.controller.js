const Restaurant = require('../models/restaurant.model');
const path = require('path')

module.exports.index = (req, res) => {
  Restaurant.find({}).then((restaurants) => {
    res.render("restaurants/index", {
      restaurants: restaurants,
      path: req.path
    });
  });
};

module.exports.new = (req, res) => {
  res.render('restaurants/new', {
    path: req.path
  });
};

module.exports.delete = (req, res) => {
  Restaurant.remove({ _id: req.params.id }).then(() => {
    res.redirect("/restaurants");
  });
};

module.exports.create = (req, res) => {
  new Restaurant({
    name: req.body.name,
    description: req.body.description,
    file: `/documents/${req.file.filename}`,
    location: {
      type: 'Point',
      coordinates: [req.body.latitude, req.body.longitude]
    }
  }).save()
    .then((restaurant) => {
      res.redirect("/restaurants");
    })
    .catch((err) => {
      res.render('restaurants/new', {
        err: err,
        path: req.path
      });
    });
};

module.exports.pic = (req, res) => {
  Restaurant.findById(req.params.id).then((restaurant) => {
    res.sendFile(path.join(__dirname, '../', restaurant.file));
  });
}
