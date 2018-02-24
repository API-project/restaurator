const mongoose = require('mongoose');

const ElTenedorEatSchema = new mongoose.Schema({
     name: {
         type: String,
     },
     
);

const ElTenedor = mongoose.model('ElTenedor', ElTenedorSchema);
module.exports = ElTenedor;
