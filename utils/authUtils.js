// var moment = require('moment');
var request = require("request");

var User = require('../models/userModel');
var session = require('../models/sessionModel');

exports.isAuthenticated = function (req, res, next) {
	console.log('isAuthenticated function is called');
    console.log('token received is ',req.headers.token);
    var token = req.headers.token;
    var NOW = new Date();
    if(token === undefined){
        console.log('token is undefined');
        res.status(401).send('token is undefined')
    } else {
        session.findOne({token: token, expiry:{$gt: NOW} })
        .exec(function(err, sessionResponse) {
            if(err) {
                res.status(500).json({
                    errCode: 500,
                    message: "Error when getting restaurant"
                })
            }
            if(!sessionResponse) {
                res.status(401).send('invalid token');
            }
            if(sessionResponse) {
                next()
            }
        })
    }
}