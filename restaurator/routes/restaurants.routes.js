const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurants.controller');

router.get('/index', restaurantsController.index);
router.get('/new', restaurantsController.new);
router.post('/', restaurantsController.create);
router.post('/:id/delete', restaurantsController.delete);
router.get('/:id/pic', restaurantsController.pic);

module.exports = router;
