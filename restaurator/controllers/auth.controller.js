const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;
const passport = require('passport');
const mongoose = require('mongoose');

module.exports.signup = (req, res, next) => {
  res.render('auth/signup');
};

module.exports.doSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;

  if (username === "" || password === "") {

    res.render("auth/signup", {
      error : "Indicate username and password"
    });
    return;
  }

    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = new User({
          username,
          password: hashPass,
          name,
          email
        });
        newUser.save((err) => {
          if (err) {
            console.log(err)
            res.render("auth/signup", {
              error: "Something went wrong"
            });
          } else {
            res.redirect('/login');
          }
        });
      })
    };

    module.exports.login = (req, res, next) => {
      res.render('auth/login');
    };

    module.exports.doLogin = (req, res, next) => {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        res.render('auth/login', {
          user: { email: email },
          error: {
            email: email ? '' : 'Email is required',
            password: password ? '' : 'Password is required'
          }
        });
        } else {
        passport.authenticate('local-auth', (error, user, validation) => {
          if (error) {
            next(error);
          } else if (!user) {
            res.render('auth/login', { error: validation });
          } else {
            req.login(user, (error) => {
              if (error) {
                next(error);
              } else {
                req.flash('welcome', 'Welcome back');
                res.render('auth/profile');
              }
            });
          }
        })(req, res, next);
      }
    }

    module.exports.delete = (req, res, next) => {
      const username = req.params.username;
      if(req.user.role == 'admin'){
        User.remove({ username: username }, (error) => {
          console.error(error);
        });
      } else {
        console.error('User is not admin');
      }
    }

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/login');
}
