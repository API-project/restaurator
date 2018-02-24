const mongoose = require('mongoose');

const ElTenedorSchema = new mongoose.Schema({
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
     },]
});

const ElTenedor = mongoose.model('ElTenedor', ElTenedorSchema);
module.exports = ElTenedor;
