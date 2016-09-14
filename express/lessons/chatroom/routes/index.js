module.exports = function (app, server){
  // this gets the socket.io module
  var io = require('socket.io').listen(server) 
  // root route to render the index.ejs view
  app.get('/', function(req, res) {
    res.render("index");
  })

  var users = {};
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
        console.log(data.name);
        io.emit("new_user_join", { response: data.name });

        // send the roster to the user who just joined
        socket.emit("existing_users", { response: users });
      }
    });

    // listen for disconnect
    socket.on("disconnect", function () {
      //console.log(socket);
      console.log("socket.id in disconnect: ", socket.id);
      if (users[socket.id]) {
        // broadcast to all except the disconnected user
        socket.broadcast.emit("disconnect_user", { response: users[socket.id]});
        delete users[socket.id];
        socket.broadcast.emit("existing_users", { response: users });
      }
    });

  });

};
