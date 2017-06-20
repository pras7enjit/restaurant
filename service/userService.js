(function (userService) {
	// body...
	var user = require('../models/userModel');
	var session = require('../models/sessionModel');
	// var moment = require('moment');
	const TokenGenerator = require('uuid-token-generator');
	const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);

	userService.createUser = function(userObj, callback) {
		console.log("In createUser service");
		var sessionObj = {};
		var NOW = new Date();
		var a = new Date();
		sessionObj.expiry = a.setDate(a.getDate() + 1);
		sessionObj.token = tokgen2.generate();
		sessionObj.created = NOW;
		sessionObj.updated = NOW;
		userObj.save(function (err, user) {
            if (err) {
                // return res.status(500).json({
                // 	errorCode: 500,
                //     message: 'Error when creating user'
                // });
                callback(err); return;
            }
			sessionObj.userId = userObj._id;
			// sessionObj.token = tokgen2.generate();
			// sessionObj.created = NOW;
			// sessionObj.updated = NOW;
			// sessionObj.expiry = a.setDate(a.getDate() + 1);
			var sessionModel = new session(sessionObj);
			sessionModel.save(function(err, sessionSuccess) {
				if(err) {
					callback(err); return;
				}
				callback(null, sessionSuccess);
			})
            // tokgen2.generate()
            // return res.status(201).json(user);
        });
	}
	userService.login = function(reqObj, callback) {
		console.log("In login service", reqObj);
		var sessionObj = {};
		var NOW = new Date();
		var a = new Date();
        user.findOne({email: reqObj.email, password: reqObj.password})
        .exec(function(err, loginResponse) {
        	if(err) {
        		callback(err); return;
        	}
        	if(!loginResponse) {
        		callback({errorCode:401 , message: "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided"}); return;
        	}
        	sessionObj.userId = loginResponse._id;
			sessionObj.token = tokgen2.generate();
			sessionObj.created = NOW;
			sessionObj.updated = NOW;
			sessionObj.expiry = a.setDate(a.getDate() + 1);
			var sessionModel = new session(sessionObj);
			sessionModel.save(function(err, sessionSuccess) {
				if(err) {
					callback(err); return;
				}
				callback(null, sessionSuccess);
			})
        	// callback(null, loginResponse);
        })
	}
	Date.prototype.addHours = function(h){
        this.setHours(this.getHours()+h);
        return this;
    }
    Date.prototype.addMinutes = function(minutes) {
        this.setMinutes(this.getMinutes() + minutes);
        return this;
    };

    Date.prototype.addSeconds = function(seconds) {
        this.setSeconds(this.getSeconds() + seconds);
        return this;
    };
})(module.exports)