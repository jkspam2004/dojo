/* expresss is a node module. run `npm install express` */
var session = require('express-session');
var express = require("express");
var app = express(); // invoke express module to create server
var bodyParser = require('body-parser');
app.use(session({ secret: 'codingdojorocks' }));

// use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.use(bodyParser.urlencoded());

app.set('views', __dirname + '/views'); // where express will look for ejs views
app.set('view engine', 'ejs'); // use ejs templating engine

// handle the root route
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1><a href='/users/'>Users</a>");
});

app.get('/users', function(request, response) {
  var users_array = [
    { id: 1, name: "Michael", email: "michael@codingdojo.com" },
    { id: 2, name: "Jay", email: "jay@codingdojo.com" },
    { id: 3, name: "Brendan", email: "brendan@codingdojo.com" },
    { id: 4, name: "Andres", email: "andrew@codingdojo.com" },
  ];
  response.render('users', { users: users_array });
});

app.get('/foo', function(request, response) {
  response.render('foo', { title: "my Express project" });
});

// route to process new user form data:
app.post('/users', function(request, response) {
  // body-parser allows us to get POST data in JSON format
  console.log("POST DATA\n\n", request.body); // request.body is data from our form
  // set the name property of session
  request.session.name = request.body.name;
  console.log("session name:", request.session.name);
  // code to add user to db
  // redirect user back to root route
  response.redirect('/');
});

app.get("/users/:id", function(request, response) {
  console.log("The user id requested is:", request.params.id);
  response.send("You requested the user with id: " + request.params.id);
  // code to get user from db goes here
});


app.listen(8000, function() {
  console.log("listening on port 8000");
});

/* ejs is the templating engine. `npm install ejs` */
// npm install body-parser . used to access POST data from the request object
// npm install express-session



