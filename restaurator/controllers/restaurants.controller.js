const Restaurant = require('../models/restaurants.model');
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

module.exports.index = (req, res) => {
  Restaurant.find({}).then((restaurants) => {
    res.render("restaurants/index", {
      restaurants
    });
  });
};

module.exports.new = (req, res) => {
  res.render('restaurants/new', {
    error: {}
  });
};

module.exports.delete = (req, res) => {
  Restaurant.remove({
    _id: req.params.id
  }).then(() => {
    res.redirect("/restaurants");
  });
};

module.exports.create = (req, res) => {
  console.log(req.body)
  const {
    name,
    email,
    password,
    description
  } = req.body;
  let error = {};
  //const location = req.body.latitude, req.body.longitude;
  //const file = `/documents/${req.file}`;
  if (!name) {
    error.name = 'Name is required';
  }
  if (!email) {
    error.email = 'Email is required';
  }
  if (!password) {
    error.password = 'Passoword is required';
  }
  if (error.name || error.email || error.password) {
    res.render("restaurants/new", {
      error
    });
  }

  Restaurant.findOne({email}, (err, restaurant) => {
    if (restaurant !== null) {
      res.render("restaurants/new", {
        error: "The name already exists"
      });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    console.log('Imprimo password, luego salt => ')
    console.log(password)
    console.log(salt)
    const hashPass = bcrypt.hashSync(password, salt);
    const newRestaurant = new Restaurant({
      name,
      email,
      password: hashPass,
      description
    });
    newRestaurant.save()
      .then(result => {
        console.log('Restaurante guardado correctamente')
        res.redirect("restaurants/index");
      })
      .catch(err => {
        console.log(err)
        res.render("restaurants/new", {
          error: "Something went wrong"
        });
      });
  })
};


module.exports.pic = (req, res) => {
  Restaurant.findById(req.params.id).then((restaurant) => {
    res.sendFile(path.join(__dirname, '../', restaurant.file));
  });
}
