console.log("users factory");

app.factory('usersFactory', ['$http', function($http) {
  /* constructor for our factory */
  var user = {};
  function usersFactory() {
    var _this = this;

    /* index method: get all users 
       make http request to server side: routes -> controller
       controller returns json in the form of {data: { result: Object, status: Boolean }}
    */
    this.get = function(username, callback) {
      $http.get('/users/' + username).then(function(returned_data) {
        console.log("factory.get return data", returned_data.data);
        user = returned_data.data.result;
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };
    /* get user from factory, not db */
    this.getUser = function(callback) {
      if (typeof(callback) == 'function') {
        callback(user);
      }
    }; 
    /* create a new user */
    this.create = function(newUser, callback) {
      $http.post('/users', newUser).then(function(returned_data) {
        console.log("factory.create return data", returned_data.data);
        user = returned_data.data.result;
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };
  };
  console.log(new usersFactory());
  return new usersFactory();
}]);
