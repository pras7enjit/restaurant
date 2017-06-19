var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController.js');
var authUtils = require('../utils/authUtils')
/*
 * GET
 */
router.get('/', menuController.list);

/*
 * GET
 */
router.get('/:id', menuController.show);

/*
 * POST
 */
router.post('/create/:id', authUtils.isAuthenticated, menuController.create);

/*
 * PUT
 */
router.put('/restaurant/:id', menuController.update);

/*
 * DELETE
 */
router.delete('/:id', menuController.remove);

module.exports = router;
