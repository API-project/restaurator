const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');
const passportLocal = require('passport-local');
const secure = require('../middleware/secure.middleware');

router.get('/signup', authController.signup);
router.post('/signup', authController.doSignup);

router.get('/login', secure.nonAuthenticated, authController.login);
router.post('/login', secure.nonAuthenticated, authController.doLogin);

router.get('/logout', secure.isAuthenticated, authController.logout);

router.post('/profile/:id', secure.isAuthenticated, authController.delete);
//router.put(update)

module.exports = router;
