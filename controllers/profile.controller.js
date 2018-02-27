const User = require('../models/user.model')
const Restaurant = require('../models/restaurants.model');

module.exports.index = (req, res, next) => {
  res.render('profile/profile', { title: 'Express' });
};


module.exports.show = (req, res) => {
  const username = req.params.username;
    User.findOne({ username: req.params.username})
        .then(user => {
            if (!user) {
                next();
            } else {
                Restaurant.find({username: user.username})
                    .sort({ createdAt: -1})
                    .then(favourite => {
                        res.render('restaurants/show', {
                            favourite: favourite,
                            user: user,
                            // moment: moment,
                            // session: req.session.currentUser,
                            // favourite: req.session.currentUser &&
                            //     req.session.currentUser.favourite.some(f => f == user._id)
                        })
                    })
                    .catch(error => next(error));
            }
        })
        .catch(error => next(error));
}
