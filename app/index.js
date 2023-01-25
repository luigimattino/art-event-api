require('dotenv').config()
const express = require('express')
const api = require('./api')
const app = express()
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
module.exports = app