/* configure server side to use sockets */

var express = require('express');
//var path = require('path');
var app = express();

//app.use(express.static(path.join(__dirname + '/static')));
app.use(express.static(__dirname + '/static'));
console.log("dirname: ", __dirname);

//app.set('views', path.join(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('index');
});

// store app.listen into server variable
var port = 8000
var server = app.listen(port, function() {
  console.log("listening on port", port);
});

// pass server variable to the require
var io = require('socket.io').listen(server);


// whenever a connection event happens (the connection even is built in), run the following code
io.sockets.on('connection', function(socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);

  // socket code goes here
  socket.on("button_clicked", function(data) {
    console.log("Someone clicked a button! Reason: " + data.reason);
    socket.emit("server_response", { response: "sockets are the best!" });
  });
});

/*

Emit: sends data from the server to the specific client who initiated contact.
Broadcast: sends data from the server to everyone BUT the client that initiated the contact.
Full Broadcast: sends data to all connected clients.

*/
