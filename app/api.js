var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// Connecting to database
const db = (process.env.DATABASE_URI);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.error("Error:" + error);
    }
});



module.exports = router;