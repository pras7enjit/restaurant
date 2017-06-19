var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'name' : String,
	'email' : {type:String, unique: true},
	'password': String,
	'phone' : String,
	'created' : Date,
	'updated' : Date
});

module.exports = mongoose.model('user', userSchema);
