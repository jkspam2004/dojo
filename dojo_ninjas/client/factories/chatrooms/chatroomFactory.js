console.log("socket factory");

/* client side. socket factory */
app.factory('socket', function ($rootScope) {
  var host = "http://localhost:8000";
  var socket = io.connect(host);

  return {
    on: function (eventName, callback) {
      console.log("factory socket on", eventName);
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    },
    currentId: function(){
        return socket.id;
    }
  };
});
