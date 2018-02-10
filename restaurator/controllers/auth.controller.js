const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

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
            res.redirect("/");
          }
        });
      })
    };

    module.exports.login = (req, res, next) => {
      res.render('auth/login');
    };
    module.exports.doLogin = (req, res, next) => {
      const password = req.body.password;
      const name = req.body.name;
      res.render('auth/login');
    };
