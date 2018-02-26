const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/restaurator';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to ${MONGO_URI} database.`);
    }).catch((error) => {
        console.error(`Database connection error: ${error}`);
    });
