var reviewModel = require('../models/reviewModel.js');
var reviewService = require("../service/reviewService");//reviewService

/**
 * reviewController.js
 *
 * @description :: Server-side logic for managing reviews.
 */
module.exports = {

    /**
     * reviewController.list()
     */
    list: function (req, res) {
        reviewModel.find(function (err, reviews) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting review.',
                    error: err
                });
            }
            return res.json(reviews);
        });
    },

    /**
     * reviewController.show()
     */
    show: function (req, res) {
        var restaurantId = req.params.id;
        reviewService.viewRatingOfRestaurant(restaurantId, function(err, reviewResponse) {
            if(err) {
                next(err); return
            }
            return res.status(200).json(reviewResponse);
        })
    },

    /**
     * reviewController.create()
     */
    create: function (req, res) {
        var review = new reviewModel({
			restaurantId : req.body.restaurantId,
			customerId : req.body.customerId,
			rating : req.body.rating,
			comment : req.body.comment,
			created : req.body.created,
			updated : req.body.updated
        });

        review.save(function (err, review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating review',
                    error: err
                });
            }
            return res.status(201).json(review);
        });
    },

    /**
     * reviewController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        reviewModel.findOne({_id: id}, function (err, review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting review',
                    error: err
                });
            }
            if (!review) {
                return res.status(404).json({
                    message: 'No such review'
                });
            }

            review.restaurantId = req.body.restaurantId ? req.body.restaurantId : review.restaurantId;
			review.customerId = req.body.customerId ? req.body.customerId : review.customerId;
			review.rating = req.body.rating ? req.body.rating : review.rating;
			review.comment = req.body.comment ? req.body.comment : review.comment;
			review.created = req.body.created ? req.body.created : review.created;
			review.updated = req.body.updated ? req.body.updated : review.updated;
			
            review.save(function (err, review) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating review.',
                        error: err
                    });
                }

                return res.json(review);
            });
        });
    },

    /**
     * reviewController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        reviewModel.findByIdAndRemove(id, function (err, review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the review.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    /*
    * createReviewForRestaurant()
    */
    createReviewForRestaurant: function(req, res, next) {
        var restaurantId = req.params.id;
        reviewService.reviewRestaurant(req.body, restaurantId, function(err, reviewResponse) {
            if(err) {
                next(err); return
            }
            return res.status(202).json(reviewResponse);
        })
    },
    /*
    * ratingOfRestaurant
    */
    ratingOfRestaurant: function(req, res, next) {
        var restaurantId = req.params.id;
        reviewService.viewRatingOfRestaurant(restaurantId, function(err, reviewResponse) {
            if(err) {
                next(err); return
            }
            return res.status(200).json(reviewResponse);
        })
    }
};
