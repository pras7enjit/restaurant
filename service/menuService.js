(function (menuService) {
	// body...
	var menuModel = require('../models/menuModel.js');
	var restaurantModel = require('../models/restaurantModel.js');
	var error = require('./error.js')
	/*Create Menu*/
	menuService.createMenu = function(menuObj, callback){
		console.log("In createMenu Service", menuObj);
		menuService.getMenuOfRestaurant(menuObj.restaurantId, function(err, restaurantResponse) {
			if(err) {
				callback(err); return;
			}
			menuModel
			.findOne({restaurantId: menuObj.restaurantId})
			.exec(function(err, menuResponse) {
				if(err) {
					callback(err); return;
				}
				if(!menuResponse) {
					menuObj.save(function (err, menu) {
			            if (err) {
			                callback(err); return;
			            }
			            callback();
			        });
				}
				else {
					// console.log("err in service", error.menuExits)
					callback(error.menuExits, null); return;
				}
			})
		})
	}

	menuService.getMenuOfRestaurant = function(restaurantId, callback) {
		console.log("In get Menu Of Restaurant Service");
		restaurantModel
		.findOne({_id: restaurantId})
		.exec(function(err, restaurantResponse) {
			console.log("restaurantResponse -=-=-=>", restaurantResponse);
			if(err) {
				callback(err); return;
			}
			if(!restaurantResponse) {
				callback(error.notFound, null); return;
			}
			callback(null, restaurantResponse)
		})
	}
})(module.exports);