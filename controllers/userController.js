var userModel = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
 var userService = require('../service/userService');
module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function (req, res, next) {
        var NOW = new Date();
        var user = new userModel({
			name : req.body.name,
			email : req.body.email,
			phone : req.body.phone,
			created : NOW,
			updated : NOW
        });

        // user.save(function (err, user) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when creating user',
        //             error: err
        //         });
        //     }
        //     return res.status(201).json(user);
        // });
        if(user.name===undefined || user.email===undefined){
            return res.status(500).json({
                errorCode: 500,
                message: 'Error when creating user',
            });
        }
        userService.createUser(user, function(err, userCreated) {
            if(err) {
                if(err.errorCode!== undefined) {
                    console.log("custom err", err)
                    return res.status(err.errorCode).json(err);
                }
                // next(err); return;
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }
            
            return res.status(201).json(user);
        })
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.name = req.body.name ? req.body.name : user.name;
			user.email = req.body.email ? req.body.email : user.email;
			user.phone = req.body.phone ? req.body.phone : user.phone;
			user.created = req.body.created ? req.body.created : user.created;
			user.updated = req.body.updated ? req.body.updated : user.updated;
			
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    login: function(req, res, next) {
        userService.login(req.body, function(err, loginResponse) {
            if(err) {
                if(err.errorCode!== undefined) {
                    console.log("custom err", err)
                    return res.status(err.errorCode).json(err);
                }
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }

            return res.status(202).json(loginResponse);
        })
    }
};
