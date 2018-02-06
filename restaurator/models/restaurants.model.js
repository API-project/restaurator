const mongoose = require('mongoose');
const mongooseEmail = require('mongoose-type-email');
const restaurantSchema = new mongoose.Schema({

     name: {
         type: String,
         required: [true, 'Name is required'],
         unique: true,
     },

     email: {
         type: mongoose.SchemaTypes.Email,
         required: [true, 'Email is required'],
     },
     password: {
         type: String,
         required: [true, 'User needs a password']
     },

     category: {
         type: String,

     },

     description: {
         type: String,

     },

     location: {
         type: String,

     },

     imageUrl: {
         type: String,

     },


 }, { timestamps: true });

 const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  module.exports = Restaurant;
