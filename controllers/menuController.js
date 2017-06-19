var menuModel = require('../models/menuModel.js');
var menuService = require('../service/menuService.js');

/**
 * menuController.js
 *
 * @description :: Server-side logic for managing menus.
 */
module.exports = {

    /**
     * menuController.list()
     */
    list: function (req, res) {
        menuModel.find(function (err, menus) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting menu.',
                    error: err
                });
            }
            return res.json(menus);
        });
    },

    /**
     * menuController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        menuModel.findOne({_id: id}, function (err, menu) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting menu.',
                    error: err
                });
            }
            if (!menu) {
                return res.status(404).json({
                    message: 'No such menu'
                });
            }
            return res.json(menu);
        });
    },

    /**
     * menuController.create()
     */
    create: function (req, res, next) {
        console.log("In create menu Controller");
        var NOW = new Date();
        
        var menu = new menuModel({
			restaurantId : req.params.id,
			snacks : req.body.snacks,
			statersVeg : req.body.statersVeg,
			statersNonVeg : req.body.statersNonVeg,
			mainCourseVeg : req.body.mainCourseVeg,
			mainCourseNonVeg : req.body.mainCourseNonVeg,
			deserts : req.body.deserts,
			beverages : req.body.beverages,
			created : NOW,
			updated : NOW
        });

        // menu.save(function (err, menu) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when creating menu',
        //             error: err
        //         });
        //     }
        //     return res.status(201).json(menu);
        // });
        menuService.createMenu(menu, function(err, menuResponse) {

            if(err) {
                if(err.errorCode!== undefined) {
                    console.log("custom err", err)
                    return res.status(err.errorCode).json(err);
                }
                next(err); return;
                // return res.status(500).json({
                //     message: 'Error when creating menu',
                //     error: err
                // });
            }
            res.end();
        })
    },

    /**
     * menuController.update()
     */
    update: function (req, res, next) {
        var id = req.params.id;
        menuModel.findOne({restaurantId: id}, function (err, menu) {
            if (err) {
                return res.status(500).json({
                    errorCode: 500,
                    message: 'Error when getting menu',
                });
                // next(err);return;
            }
            if (!menu) {
                return res.status(404).json({
                    errorCode: 404,
                    message: 'No such menu'
                });
            }

            menu.restaurantId = req.body.restaurantId ? req.body.restaurantId : menu.restaurantId;
			menu.snacks = req.body.snacks ? req.body.snacks : menu.snacks;
			menu.statersVeg = req.body.statersVeg ? req.body.statersVeg : menu.statersVeg;
			menu.statersNonVeg = req.body.statersNonVeg ? req.body.statersNonVeg : menu.statersNonVeg;
			menu.mainCourseVeg = req.body.mainCourseVeg ? req.body.mainCourseVeg : menu.mainCourseVeg;
			menu.mainCourseNonVeg = req.body.mainCourseNonVeg ? req.body.mainCourseNonVeg : menu.mainCourseNonVeg;
			menu.deserts = req.body.deserts ? req.body.deserts : menu.deserts;
			menu.juice = req.body.juice ? req.body.juice : menu.juice;
			menu.created = req.body.created ? req.body.created : menu.created;
			menu.updated = req.body.updated ? req.body.updated : menu.updated;
			
            menu.save(function (err, menu) {
                if (err) {
                    return res.status(500).json({
                        errorCode: 500,
                        message: 'Error when updating menu.',
                        //error: err
                    });
                    // next(err);
                }

                return res.json(menu);
            });
        });
    },

    /**
     * menuController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        menuModel.findByIdAndRemove(id, function (err, menu) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the menu.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
