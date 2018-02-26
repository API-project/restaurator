const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurants.controller');

router.get('/index', restaurantsController.index);
router.get('/new', restaurantsController.new);
router.get('/show', restaurantsController.show);
router.post('/new', restaurantsController.create);
// router.post('/:id/edit', restaurantsController.edit);
router.post('/:id/delete', restaurantsController.delete);
// router.get('/:id/pic', restaurantsController.pic);
router.post('/:id/like', restaurantsController.like);

module.exports = router;
