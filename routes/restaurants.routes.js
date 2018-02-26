const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurants.controller');

router.get('/index', restaurantsController.index);
router.get('/new', restaurantsController.new);
router.get('/show', restaurantsController.show);
router.post('/', restaurantsController.create);
router.post('/:id/edit', restaurantsController.edit);
router.delete('/:id/delete', restaurantsController.delete);
router.get('/:id/pic', restaurantsController.pic);
router.get('/:id/like', restaurantsController.like);

module.exports = router;
