const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurator');

const ElTenedor = require('../models/eltenedor.model');
const JustEat = require('../models/justeat.model');
const Dishes = require('../models/dishes.model');

const eltenedor = [{
    "rating": 0.9,
    "name": "Telepizza",
    "geo_location": {
      "lat": '40.4395689',
      "lon": '-3.7139636',
    },
    "location": "Madrid",
    "address": "Calle de Cea Bermúdez, 38, Madrid",
    "date": "2017-11-30 17:23:09",
    "id": "et-344233",
    "categories": ["AMERICANO", "MODERNO", "CON AMIGOS"],
    "reservation": "https://www.google.com"
  },
  {
    "rating": 0.9,
    "name": "Chef2me",
    "geo_location": {
      "lat": '40.43756',
      "lon": '-3.7091789',
    },
    "location": "Madrid",
    "address": "Calle de Joaquín María López, 10, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["AMERICANO", "MODERNO", "CON AMIGOS"]
  },
  {
    "rating": 0.8,
    "name": "Las Tartas de L'Atelier",
    "geo_location": {
      "lat": '40.4397004',
      "lon": '-3.71006060',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["AMERICANO", "MODERNO", "CON AMIGOS"]
  }
];

const justeat = [{
    "rating": 0.9166666666666666,
    "name": "Telepizza",
    "href": "https://www.just-eat.es/restaurants-telepizzabarriocarmenes/menu",
    "geo_location": {
      "lat": "40.4395689",
      "lon": "-3.713963",
    },
    "location": "Madrid",
    "address": "Calle Juan \u00c1lvarez Mendiz\u00e1bal,3, Madrid 28008",
    "date": "2017-11-30 18:12:50",
    "id": "je-18125",
    "categories": [
      "Mediterranea",
      " Gourmet"
    ]
  },
  {
    "rating": 0.9166666666666666,
    "name": "Las Tartas de L'Atelier",
    "href": "https://www.just-eat.es/restaurants-telepizzabarriocarmenes/menu",
    "geo_location": {
      "lat": '40.4397004',
      "lon": '-3.71006060',
    },
    "location": "Madrid",
    "address": "Calle Juan \u00c1lvarez Mendiz\u00e1bal,3, Madrid 28008",
    "date": "2017-11-30 18:12:50",
    "id": "je-18125",
    "categories": [
      "Mediterranea",
      " Gourmet"
    ]
  },
  {
    "rating": 0.9166666666666666,
    "name": "Chef2me",
    "href": "https://www.just-eat.es/restaurants-telepizzabarriocarmenes/menu",
    "geo_location": {
      "lat": '40.43756',
      "lon": '-3.7091789',
    },
    "location": "Madrid",
    "address": "Calle Juan \u00c1lvarez Mendiz\u00e1bal,3, Madrid 28008",
    "date": "2017-11-30 18:12:50",
    "id": "je-18125",
    "categories": [
      "Mediterranea",
      " Gourmet"
    ]
  },

];

const dishes = [{
  "Name": "Telepizza",
  "geo_location": {
    "lat": '40.4395689',
    "lon": '-3.7139636',
  },
  "ImageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/3c/3c1523506c3cc8a0b640da99b37898a7",
},
{
  "Name": "Chef2me",
  "geo_location": {
    "lat": '40.43756',
    "lon": '-3.7091789',
  },
  "ImageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/a2/a24b71246cd6d5816d081b2d977f09a7",
}
];

ElTenedor.create(eltenedor).then((eltenedor) => {
  console.log('eltenedor creado')
  JustEat.create(justeat).then((justeat) => {
    console.log('justeat creado');
    Dishes.create(dishes).then((dishes) => {
      console.log('dishes creado');
    mongoose.connection.close();
  })
  })
});
