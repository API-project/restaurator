const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurator');

const ElTenedor = require('../models/eltenedor.model');
const JustEat = require('../models/justeat.model');

const eltenedor = {
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
  "categories": ["AMERICANO", "MODERNO", "CON AMIGOS"]
};

const justeat = {
  "rating": 0.9166666666666666,
  "name": "Telepizza",
  "href": "https://www.just-eat.es/restaurants-telepizzabarriocarmenes/menu",
  "geo_location":{
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
 }

ElTenedor.create(eltenedor).then((eltenedor) => {
  console.log('eltenedor creado')
  JustEat.create(justeat).then((justeat) => {
    console.log('justeat creado');
    mongoose.connection.close();
  })
});
