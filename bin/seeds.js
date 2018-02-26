const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurator');

const ElTenedor = require('../models/eltenedor.model');
const JustEat = require('../models/justeat.model');
const Dishes = require('../models/dishes.model');

const eltenedor = [{
    "rating": 0.9,
    "name": "Domino's Pizza",
    "geo_location": {
      "lat": '40.4395689',
      "lon": '-3.7139636',
    },
    "location": "Madrid",
    "address": "Calle de Cea Bermúdez, 38, Madrid",
    "date": "2017-11-30 17:23:09",
    "id": "et-344233",
    "categories": ["Pizzas", "Comida rápida", "Con amigos"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/0d/0ddb8e0ea69e108982b71c65ffffdadf"
  },
  {
      "rating": 0.9,
      "name": "La Francerie",
      "geo_location": {
        "lat": '40.434019',
        "lon": '-3.704684000000043',
      },
      "location": "Madrid",
      "address": "Calle de Cea Bermúdez, 38, Madrid",
      "date": "2017-11-30 17:23:09",
      "id": "et-344233",
      "categories": ["Francés", "Romántico", "Con Pareja"],
      "reservation": "https://www.google.com",
      "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/1d/1d2cd597dda5b48d02d7f71f7b893f43"
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
    "categories": ["Casero", "Comida Rápida", "Menú del día"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/pro/2d/2d007d2331d999d79dbbb28238be3a26"
  },
  {
    "rating": 0.9,
    "name": "Papa John's Pizza",
    "geo_location": {
      "lat": '40.4316468',
      "lon": '-3.710589099999993',
    },
    "location": "Madrid",
    "address": "Calle de Joaquín María López, 10, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Pizzas", "Comida rápida", "Con amigos"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/pro/2d/2d930d613ffe97ae072cf51ab96c88f8"
  },
  {
    "rating": 0.8,
    "name": "Las Tartas de L'Atelier",
    "geo_location": {
      "lat": '40.4397004',
      "lon": '-3.7100606',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Postres", "Meriendas"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/a2/a24b71246cd6d5816d081b2d977f09a7"
  },
  {
    "rating": 0.8,
    "name": "Di Roma",
    "geo_location": {
      "lat": '40.4354237',
      "lon": '-3.706939000000034',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Pizzas", "Comida rápida", "Con amigos"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/3f/3f0aa915c498d5083f8a9d7367355254"
  },
  {
    "rating": 0.8,
    "name": "Hong Kong City",
    "geo_location": {
      "lat": '40.43145120000001',
      "lon": '-3.7159107999999605',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Chino", "Comida rápida", "Barato"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/4c/4c054a4486e1600296c30a7169794159"
  },
  {
    "rating": 0.8,
    "name": "Los Bocadillos",
    "geo_location": {
      "lat": '40.43041350000001',
      "lon": '-3.716524800000002',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Bocadillos", "Comida rápida", "Barato"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/4c/4c054a4486e1600296c30a7169794159"
  },
  {
    "rating": 0.8,
    "name": "Matías Buenos Días",
    "geo_location": {
      "lat": '40.43041350000001',
      "lon": '-3.716524800000002',
    },
    "location": "Madrid",
    "address": "Calle de Galileo, 93, Madrid",
    "date": "2017-11-30 17:23:03",
    "id": "et-344234",
    "categories": ["Desayunos", "Diario"],
    "reservation": "https://www.google.com",
    "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/4c/4c054a4486e1600296c30a7169794159"
  },
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
      "lon": '-3.710060',
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
  "name": "Telepizza",
  "geo_location": {
    "lat": '40.4395689',
    "lon": '-3.7139636'
  },
  "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/3c/3c1523506c3cc8a0b640da99b37898a7"
},
{
  "Name": "Chef2me",
  "geo_location": {
    "lat": '40.43756',
    "lon": '-3.7091789'
  },
  "imageUrl": "https://s3-eu-west-1.amazonaws.com/assets.11870.com/originales/imagenes/a2/a24b71246cd6d5816d081b2d977f09a7"
},
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
