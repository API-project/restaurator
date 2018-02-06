const mongoose = require('mongoose');
const mongooseEmail = require('mongoose-type-email');
const userSchema = new mongoose.Schema({
     username: {
         type: String,
         required: [true, 'Username is required'],
         unique: true
     },

     name: {
         type: String,
         required: [true, 'Name is required'],
     },

     email: {
         type: mongoose.SchemaTypes.Email,
         required: [true, 'Email is required'],
     },
     password: {
         type: String,
         required: [true, 'User needs a password']
     },

     summary: {
         type: String,

     },

     imageUrl: {
         type: String,

     },

     company: {
         type: String,

     },

     jobTitle: {
         type: String,

     },
 }, { timestamps: true });

 const User = mongoose.model('User', userSchema);
  module.exports = User;
