var express = require('express');
var router = express.Router();
var restaurantController = require('../controllers/restaurantController.js');

var authUtils = require('../utils/authUtils')

/*
 * GET
 */
router.get('/', restaurantController.list);

/*
 * GET
 */
router.get('/:id', restaurantController.show);

/*
 * POST
 */
router.post('/', authUtils.isAuthenticated, restaurantController.create);

/*
 * PUT
 */
router.put('/:id', restaurantController.update);

/*
 * DELETE
 */
router.delete('/:id', restaurantController.remove);

module.exports = router;
