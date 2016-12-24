/* server side */

module.exports = function (app, server){
  // this gets the socket.io module
  var io = require('socket.io').listen(server) 
  // root route to render the index.ejs view
  app.get('/', function(req, res) {
    res.render("index");
  })

  var users = {};
  var messages = [];
  // listen to connection from the client side
  io.sockets.on('connection', function (socket){
    // server listens to "new_user" event
    socket.on("new_user", function (data){
      if (!data.name) {
        socket.emit("get_name");
      } else {
        users[socket.id] = data.name;
        console.log(users);
        // broadcast to to everyone that new user has joined
        console.log(data.name, " joined");
        io.emit("new_user_join", { name: data.name, id: socket.id });

        // send the roster to the user who just joined
        socket.emit("existing_users", { response: users, current: socket.id });
      }
    });

    // listen for chat messages
    socket.on("message", function(data) {
      messages.push(data.message);
      console.log("message", data.message);
      console.log("messages", messages);
      io.emit("chat_message", { user : users[socket.id], message : data.message });
    });

    // listen for disconnect
    socket.on("disconnect", function () {
      //console.log(socket);
      console.log("socket.id in disconnect: ", socket.id);
      if (users[socket.id]) {
        // broadcast to all except the disconnected user that user left
        socket.broadcast.emit("disconnect_user", { name: users[socket.id], id: socket.id });
        // updated roster without the disconnected user
        //socket.broadcast.emit("existing_users", { response: users });
        delete users[socket.id];
      }
    });

  });

};

/*
socket.emit : send message to one
socket.broadcast.emit : broadcast user's message to other users 
io.emit : server broadcasts to all users

*/
