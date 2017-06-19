var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({	'name' : String,	'email' : String,	'phone' : String,	'address' : String,	'DOB' : String,	'created' : Date,	'updated' : Date});

module.exports = mongoose.model('customer', customerSchema);
