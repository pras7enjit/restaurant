var restaurantModel = require('../models/restaurantModel.js');

/**
 * restaurantController.js
 *
 * @description :: Server-side logic for managing restaurants.
 */
 var restaurantService = require("../service/restaurantService");
module.exports = {

    /**
     * restaurantController.list()
     */
    list: function (req, res) {
        restaurantModel.find(function (err, restaurants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting restaurant.',
                    error: err
                });
            }
            return res.json(restaurants);
        });
    },

    /**
     * restaurantController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        restaurantService.showRestaurant(id, function(err, restaurantMenu) {
            if(err) {
                if(err.errorCode!== undefined) {
                    console.log("custom err", err)
                    return res.status(err.errorCode).json(err);
                }
                next(err); return;
            }
            console.log("restaurantMenu", restaurantMenu)
            return res.json(restaurantMenu);
        })
        
    },

    /**
     * restaurantController.create()
     */
    create: function (req, res, next) {

        var NOW = new Date();
        var restaurant = new restaurantModel({
			name : req.body.name,
			address : req.body.address,
            branch : req.body.branch,
			isActive : true,
			isClosed : req.body.isClosed,
			created : NOW,
			updated : NOW
        });
        restaurantService.createRestaurant(restaurant, function(err, restaurantResponse) {
            if(err) {
                if(err.errorCode!== undefined) {
                    console.log("custom err", err)
                    return res.status(err.errorCode).json(err);
                }
                next(err); return;
            }
            return res.status(201).json(restaurantResponse);
        })
        // restaurant.save(function (err, restaurant) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when creating restaurant',
        //             error: err
        //         });
        //     }
        //     return res.status(201).json(restaurant);
        // });
    },

    /**
     * restaurantController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        restaurantModel.findOne({_id: id}, function (err, restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting restaurant',
                    error: err
                });
            }
            if (!restaurant) {
                return res.status(404).json({
                    message: 'No such restaurant'
                });
            }

            restaurant.name = req.body.name ? req.body.name : restaurant.name;
			restaurant.address = req.body.address ? req.body.address : restaurant.address;
			restaurant.isActive = req.body.isActive ? req.body.isActive : restaurant.isActive;
			restaurant.isClosed = req.body.isClosed ? req.body.isClosed : restaurant.isClosed;
			restaurant.created = req.body.created ? req.body.created : restaurant.created;
			restaurant.updated = req.body.updated ? req.body.updated : restaurant.updated;
			
            restaurant.save(function (err, restaurant) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating restaurant.',
                        error: err
                    });
                }

                return res.json(restaurant);
            });
        });
    },

    /**
     * restaurantController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        restaurantModel.findByIdAndRemove(id, function (err, restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the restaurant.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
