var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({

module.exports = mongoose.model('customer', customerSchema);