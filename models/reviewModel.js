var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reviewSchema = new Schema({	'restaurantId' : {	 	type: Schema.Types.ObjectId,	 	ref: 'restaurant'	},	'customerId' : {	 	type: Schema.Types.ObjectId,	 	ref: 'customer'	},	'rating' : Number,	'comment' : String,	'created' : Date,	'updated' : Date});

module.exports = mongoose.model('review', reviewSchema);
