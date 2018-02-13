const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

/* GET home page. */
router.get('/', homeController.index);
//prueba master
module.exports = router;
