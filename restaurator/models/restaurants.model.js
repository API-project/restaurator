const mongoose = require('mongoose');
const mongooseEmail = require('mongoose-type-email');
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;


const RestaurantSchema = new mongoose.Schema({

     name: {
         type: String,
         //required: [true, 'Name is required'],
         //unique: true,
     },
     place_id: {
         type: String
     },
     email: {
         type: mongoose.SchemaTypes.Email,
         //required: [true, 'Email is required'],
     },
     password: {
         type: String,
         //required: [true, 'User needs a password']
     },
     category: {
         type: String,
     },
     description: {
         type: String,
     },
     direction: {
         type: String,
     },
     rating: {
         type: Number,
     },
     opening_hours: {
       open_now: {type: Boolean,}
     },
     location: {
          lat: {type: Number},
          lng: {type: Number}
      },
     imageUrl: {
          type: String,
     },
     // imageUrl: {
     //   photoreference:	{type: String},
     //   maxwidth:  {type: Number},
     //   maxheight:	{type: Number}
     // },
     file: String,

 }, { timestamps: true });

 const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
  module.exports = Restaurant;
