module.exports.signup = (req, res, next) => {
  res.render('auth/signup', {title: 'SignUp'});
};

module.exports.doSignup = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (user != null) {
                res.render('auth/signup', { user: user, error: { username: 'Username already exists'} })
            } else {
                user = new User(req.body);
                user.save()
                    .then(() => {
                        req.session.currentUser = user;
                        res.redirect('/');
                    }).catch(error => {
                        if (error instanceof mongoose.Error.ValidationError) {
                            res.render('auth/signup', { user: user, error: error.errors })
                        } else {
                            next(error);
                        }
                    });
            }
        }).catch(error => next(error));
}
