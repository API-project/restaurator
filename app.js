require("dotenv").config(".env");
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
//const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const mongooseEmail = require('mongoose-type-email');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const JsonDB = require('node-json-db');


// Import DB config
require('./configs/db.config');
require('./configs/passport.config').setup(passport);
require('./configs/scheduler.config');

// Routes
const home = require('./routes/home.routes');
const restaurants = require('./routes/restaurants.routes');
const auth = require ('./routes/auth.routes');
const result = require ('./routes/result.routes');
const profile = require ('./routes/profile.routes');

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout','layouts/main');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "restaurator-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.session = req.user || {};
  next();
});
app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = req.flash()|| {};
  next();
})


app.use('/', home);
app.use('/', auth);
app.use('/restaurants', restaurants);
app.use('/', result);
app.use('/', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
