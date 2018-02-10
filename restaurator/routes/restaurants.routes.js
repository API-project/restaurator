const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurants.controller');

router.get('/index', restaurantsController.index);
router.get('/new', restaurantsController.new);
router.post('/', restaurantsController.create);
router.post('/:id/delete', restaurantsController.delete);
router.get('/:id/pic', restaurantsController.pic);

/*
Verb	Route	CRUD Action	What does it do?
GET	/products	index	Lists Products
GET	/products/new	new	Shows New Product Form
POST	/products	create	Saves New Product to DB
GET	/products/:id	show	Shows One Product
GET	/products/:id/edit	edit	Shows Edit Product Form
POST	/products/:id	update	Saves Edited Product to the DB
POST	/products/:id/delete	delete	Deletes Single Product
GET	/products/:productId/reviews	index	Lists Reviews for a product
GET	/products/:productId/reviews/new	new	Displays form for new Review
POST	/products/:productId/reviews	create	Saves new Review to the database
GET	/products/:productId/reviews/:id/edit	edit	Displays form to edit Review
POST	/products/:productId/reviews/:id	index	Saves updated Review to the database
POST	/products/:productId/reviews/:id/delete	delete	Deletes Review
*/


module.exports = router;
