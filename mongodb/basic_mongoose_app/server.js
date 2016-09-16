/* import modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* use modules */
var app = express();
app.use(bodyParser.urlencoded('body-parser'));
app.use(express.static(path.join(__dirname, './static')));

/* set up our view path and engine */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/* mongoose */
var host = "localhost";
mongoose.connect("mongodb://" + host + "/basic_mongoose"); // dbname=basic_mongoose
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.model('User', UserSchema); // set schema in our models as User
var User = mongoose.model('User'); // retrieve schema from our models, named User


/* our routes */
app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log("something went wrong during find", err);
    } else {
      console.log("users", users);
      res.render('index', { users : users });
    }
  });
});

app.post('/users', function(req, res) {
  console.log('post data', req.body);

  var user = new User({ name: req.body.name, age: req.body.age  });
  user.save( function(err) { // callback function runs when db operation finish
    if (err) {
      console.log("something went wrong", err);
    } else {
      console.log("successfully added a user!");
      res.redirect('/');
    }
  });

});

/* listen on port */
var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port " + port);
});
