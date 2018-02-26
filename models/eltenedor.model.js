const mongoose = require('mongoose');

const ElTenedorSchema = new mongoose.Schema({

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
  imageUrl: {
    type: String,
  },
  id: {
    type: String,
  },
  categories: [
    {
      type: String,
    },
  ],
  reservation: {type: String}

});

const ElTenedor = mongoose.model('Eltenedor', ElTenedorSchema);
module.exports = ElTenedor;
