var mongoose = require('mongoose');
var express = require('express');
const event_controller = require("./controllers/event.controller.js");
var router = express.Router();

// Connecting to database
const db = (process.env.DATABASE_URI);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

router.get('/ongoing-events', event_controller.ongoing_event_list);
router.get('/cities', event_controller.get_cities);

module.exports = router;