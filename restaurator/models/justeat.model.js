const mongoose = require('mongoose');

const JustEatSchema = new mongoose.Schema({

     name: {
         type: String,
     },
     href: {
          type: String,
     },
     
);

const JustEat = mongoose.model('JustEat', JustEatSchema);
module.exports = JustEat;
