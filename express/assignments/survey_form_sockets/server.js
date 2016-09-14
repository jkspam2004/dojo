var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
console.log(__dirname);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port ", port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log("using sockets..");
  console.log("socket id:", socket.id);

  socket.on("posting_form", function(data) {
    // get form data and emit back to the client
    console.log(data.form_data);
    result = data.form_data

    var response_message = "You emitted the following information to the server: { ";
    for (var i=0; i<result.length; i++) {
      response_message += result[i].name + ": \"" + result[i].value + "\", ";
    }
    response_message = response_message.slice(0, -2); // remove the last comma
    response_message += " }";
    socket.emit("updated_message", { response: response_message });

    // emit random number to client
    var random = Math.floor((Math.random() * 1000) + 1);
    var random_message = "Your lucky number emitted by the server is " + random;
    socket.emit("random_number", { number: random_message });

  });


});
