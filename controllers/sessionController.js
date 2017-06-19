var sessionModel = require('../models/sessionModel.js');

/**
 * sessionController.js
 *
 * @description :: Server-side logic for managing sessions.
 */
module.exports = {

    /**
     * sessionController.list()
     */
    list: function (req, res) {
        sessionModel.find(function (err, sessions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session.',
                    error: err
                });
            }
            return res.json(sessions);
        });
    },

    /**
     * sessionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        sessionModel.findOne({_id: id}, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session.',
                    error: err
                });
            }
            if (!session) {
                return res.status(404).json({
                    message: 'No such session'
                });
            }
            return res.json(session);
        });
    },

    /**
     * sessionController.create()
     */
    create: function (req, res) {
        var session = new sessionModel({			userId : req.body.userId,			token : req.body.token,			created : req.body.created,			updated : req.body.updated,			expiry : req.body.expiry
        });

        session.save(function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating session',
                    error: err
                });
            }
            return res.status(201).json(session);
        });
    },

    /**
     * sessionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        sessionModel.findOne({_id: id}, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session',
                    error: err
                });
            }
            if (!session) {
                return res.status(404).json({
                    message: 'No such session'
                });
            }

            session.userId = req.body.userId ? req.body.userId : session.userId;			session.token = req.body.token ? req.body.token : session.token;			session.created = req.body.created ? req.body.created : session.created;			session.updated = req.body.updated ? req.body.updated : session.updated;			session.expiry = req.body.expiry ? req.body.expiry : session.expiry;			
            session.save(function (err, session) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating session.',
                        error: err
                    });
                }

                return res.json(session);
            });
        });
    },

    /**
     * sessionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        sessionModel.findByIdAndRemove(id, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the session.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
