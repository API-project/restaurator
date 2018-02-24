const mongoose = require('mongoose');

const JustEatSchema = new mongoose.Schema({

  name: {
      type: String,
  },
  rating: {
      type: Number,
  },
  geo_location: {

    lat: {type: String},
    lon: {type: String}

  },
  location: {
      type: String,
  },
  address: {
      type: String,
  },
  id: {
      type: String,
  },
  categories: [
    {
      type: String,

    }
  ],
  href: {
      type: String,
  },

});

const JustEat = mongoose.model('Justeat', JustEatSchema);
module.exports = JustEat;
