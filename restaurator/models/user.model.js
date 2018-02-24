const mongoose = require('mongoose');
const mongooseEmail = require('mongoose-type-email');
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

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
     imageUrl: {
         type: String,
     },
     role: {
         type: String,
         enum: ['user', 'admin'],
         default: 'user'
     },
     favourite: [{
       type: mongoose.Schema.ObjectId,
       ref: 'Restaurant'
     }],
 }, { timestamps: true });

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

 const User = mongoose.model('User', userSchema);
 module.exports = User;
