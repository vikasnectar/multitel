const express = require('express');
const app = express();

var user = require('./user');

// user route file
app.use('/user', user);

module.exports = app;