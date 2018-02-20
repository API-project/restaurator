const Restaurant = require('../models/restaurants.model');

module.exports.result = (req, res) => {
  console.log(req.body);

  res.sendStatus(200);


};
