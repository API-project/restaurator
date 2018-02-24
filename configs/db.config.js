const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

console.log(MONGO_URI+DB_NAME);

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI+DB_NAME)
    .then(() => {
        console.log(`Connected to ${DB_NAME} database.`);
    }).catch((error) => {
        console.error(`Database connection error: ${error}`);
    });
