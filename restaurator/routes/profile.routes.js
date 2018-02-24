const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');

/* GET home page. */
router.get('/', profileController.index);
router.get('/', profileController.paintRestaurants);

//prueba master
module.exports = router;
