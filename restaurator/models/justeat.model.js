const mongoose = require('mongoose');

const JustEatSchema = new mongoose.Schema({

  name: {
      type: String,
  },
  rating: {
      type: Number,
  },
  geo_location: {
    lat: {type: Number},
    lng: {type: Number}
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
  },
  href: {
      type: String,
  },
]
});

const JustEat = mongoose.model('JustEat', JustEatSchema);
module.exports = JustEat;
