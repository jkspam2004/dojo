// require express, path
var express = require("express");
var path = require("path");
// create the express app
var app = express();

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// tell the express app to listen on port 3000
var port = 3001;
var server = app.listen(port, function() {
  console.log("listening on port ", port);
})
//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app, server);
