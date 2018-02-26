const mongoose = require('mongoose');

const DishesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  geo_location: {
    lat: {type: String},
    lon: {type: String}
  },

});

const Dishes = mongoose.model('Dishes', DishesSchema);
module.exports = Dishes;
