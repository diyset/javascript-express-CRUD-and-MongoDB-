var mongoose = require('mongoose');


var GuruSchema =  new mongoose.Schema({
  nama:String,
  alamat:String,
  tarif:Number
});


module.exports = mongoose.model('Guru',GuruSchema);
