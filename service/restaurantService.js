(function (restaurantService) {
	// body...
	var restaurantModel = require('../models/restaurantModel');
	var menuModel = require('../models/menuModel.js');
	var error = require('./error')
	restaurantService.createRestaurant = function(restaurantObject, callback){
		console.log("In createRestaurant Service");
		restaurantObject.save(function(err, restaurantCreateResponse) {
			if(err) {
				callback(err); return;
			}
			callback()
		})
	}

	restaurantService.showRestaurant = function(restaurantId, callback) {
		console.log("In showRestaurant Service ");
		var restaurantJsonResponse = {}, allmenu = {};
		restaurantModel.findOne({_id: restaurantId}, function (err, restaurant) {
            if (err) {
                // return res.status(500).json({
                //     message: 'Error when getting restaurant.',
                //     error: err
                // });
                callback(err, null); return;
            }
            if (!restaurant) {
                // return res.status(404).json({
                //     message: 'No such restaurant'
                // });
                callback(error.notFound, null); return;
            }
            restaurantJsonResponse.restaurantDetail = restaurant
            menuModel
            .findOne({restaurantId: restaurantId})
            .exec(function(err, menuResponse) {
            	if(err) {
            		callback(err); return;
            	}
            	if (!menuResponse) {
            		callback(error.noMenu, null); return;
            	}
            	console.log("menuResponse ", menuResponse)
            	allmenu.beverages = menuResponse.beverages;
            	allmenu.deserts = menuResponse.deserts;
            	allmenu.mainCourseNonVeg = menuResponse.mainCourseNonVeg;
            	allmenu.mainCourseVeg = menuResponse.mainCourseVeg;
            	allmenu.statersNonVeg = menuResponse.statersNonVeg;
            	allmenu.statersVeg = menuResponse.statersVeg;	
            	allmenu.snacks = menuResponse.snacks;
            	restaurantJsonResponse.menu = allmenu;
            	console.log("restaurant -=-=-=-=>", restaurantJsonResponse)
            	callback(null, restaurantJsonResponse);
            })
            // return res.json(restaurant);
        });
	}
})(module.exports)