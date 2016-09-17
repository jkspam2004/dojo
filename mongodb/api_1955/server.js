/* 1955 API: build a simple API to serve a list of people born in the year 1955 */

/* import modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* use modules */
var app = express();
app.use(bodyParser.urlencoded('body-parser'));
app.use(bodyParser.json()); // correctly read JSON
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

/* get our models */
require('./server/config/mongoose.js');

/* get our routes */
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

/* listener */
var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port " + port);
});

