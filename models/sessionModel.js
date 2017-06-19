var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var sessionSchema = new Schema({	'userId' : {	 	type: Schema.Types.ObjectId,	 	ref: 'user'	},	'token' : String,	'created' : Date,	'updated' : Date,	'expiry' : Date});

module.exports = mongoose.model('session', sessionSchema);
