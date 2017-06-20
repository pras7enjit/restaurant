(function (reviewService) {
	// declararion
	var customerModel = require('../models/customerModel');
	var reviewModel = require('../models/reviewModel');
	var restaurantModel = require('../models/restaurantModel')
	var error = require('./error');
	// body...
	reviewService.reviewRestaurant = function(customerObject, restaurantId, callback) {
		console.log("In reviewRestaurant service");
		var customerDetail = {}, review = {}, NOW = new Date();
		customerDetail.name = customerObject.name ? customerObject.name : undefined;		
		customerDetail.email = customerObject.email ? customerObject.email.toLowerCase() : undefined;
		customerDetail.phone = customerObject.phone ? customerObject.phone : undefined;
		customerDetail.address = customerObject.address ? customerObject.address : undefined;
		customerDetail.DOB = customerObject.DOB ? customerObject.DOB : undefined;
		customerDetail.updated =  NOW;
		customerDetail.created = NOW;
		review.restaurantId = restaurantId ? restaurantId : undefined;
		if(customerObject.rating === undefined) {
			callback(error.badRequest, null); return;
		}
		if(customerDetail.email===undefined) {
			callback(error.badRequest, null); return;
		}
		review.rating = customerObject.rating ? customerObject.rating : undefined;		
		review.comment = customerObject.comment ? customerObject.comment : undefined;
		review.updated = NOW;
		review.created = NOW;
		var customerModelObject = new customerModel(customerDetail);
		reviewService.findCustomerByEmail(customerDetail.email, restaurantId, function(err, successResponse) {
			if(err) {
				callback(err, null)
			}
			if(!successResponse) {
				customerModelObject.save(function(err, customerCreateResponse) {
					if(err){
						callback(err); return;
					}
					if(!customerCreateResponse ||  customerCreateResponse ===undefined) {
						callback(error.noCustomer, null); return;
					}
					review.customerId = customerCreateResponse._id;
					var reviewModelObject = new reviewModel(review);
					reviewModelObject.save(function(err, reviewCreateResponse) {
						if(err) {
							callback(err); return;
						}
						callback(null, reviewCreateResponse);
					})
				})
			}
			else {
				// callback(error.badRequest, null); return;
				reviewModel.findOne({customerId: successResponse._id, restaurantId: restaurantId})
				.exec(function(err, reviewResponse) {
					if(err) {
						callback(err); return;
					}

					// console.log('reviewResponse ', reviewResponse)
					if(!reviewResponse) {
						// callback(error.badRequest, null); return;
						console.log('customerObject ', customerObject)
						review.restaurantId = restaurantId ? restaurantId : undefined;
						review.rating = customerObject.rating ? customerObject.rating : undefined;		
						review.comment = customerObject.comment ? customerObject.comment : undefined;
						review.updated = NOW;
						review.created = NOW;
						var reviewModelObject = new reviewModel(review);
						console.log('reviewModelObject ', reviewModelObject)
						reviewModelObject.save(function(err, reviewCreateResponse) {
							if(err) {
								callback(err); return;
							}
							callback(null, reviewCreateResponse); return;
						})
					}
					else
					{
						reviewResponse.rating = customerObject.rating ? customerObject.rating : undefined;		
							reviewResponse.comment = customerObject.comment ? customerObject.comment : undefined;
							reviewResponse.updated = NOW;
							reviewResponse.created = NOW;
							reviewResponse.save(function(err, reviewUpdateResponse) {
								if(err) {
									callback(err); return;
								}
								callback(null, reviewUpdateResponse);
							})
					}
				})
			}		
		})
	}

	reviewService.viewRatingOfRestaurant = function(restaurantId, callback) {
		console.log("In viewRatingOfRestaurant service");
		var avgRating= 0, ratingResponse = {};
		reviewModel.find({restaurantId: restaurantId})
		.exec(function(err, rating) {
			if(err) {
				callback(err); return;
			}
			// callback(null, rating);
			for (var i = 0; i < rating.length; i++) {
				if(rating[i].rating!==undefined) {
					avgRating+=rating[i].rating
				}
			}
			avgRating = avgRating/rating.length;
			ratingResponse.ratings = rating;
			ratingResponse.avg = avgRating;
			callback(null, ratingResponse);
		})
	}
	reviewService.findCustomerByEmail = function(email, restaurantId, callback) {
		restaurantModel.findOne({_id: restaurantId})
		.exec(function(err, restaurantResponse) {
			if(err) {
				callback(err); return;
			}
			console.log("restaurantResponse", restaurantResponse)
			if(!restaurantResponse) {
				callback(error.notFound, null); return;
			}
			console.log("ok")
			customerModel.findOne({email: email.toLowerCase()})
			.exec(function(err, getCustomer) {
				if(err) {
					callback(err); return;
				}
				if(!getCustomer) {
					// callback(error.customerDuplicate, null); return
					callback(null, null)
				}
				else {
					console.log("When customer rating exits")
					callback(null, getCustomer)
				}
				
			})
		})
		
	}
})(module.exports)