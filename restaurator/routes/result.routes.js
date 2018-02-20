const express = require('express');
const router = express.Router();
const resultController = require('../controllers/result.controller');

router.post('/result', resultController.result);


module.exports = router;
