console.log("users factory");

app.factory('usersFactory', ['$http', function($http) {
  /* constructor for our factory */
  var users = [];
  var friend = [];
  function usersFactory() {
    var _this = this;

    /* create a new friend */
    this.create = function(newFriend, callback) {
      $http.post('/users', newFriend).then(function(returned_data) {
        console.log("factory.create return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* update method: update a friend */
    this.update = function(updateFriend, callback) {
      console.log("factory.update input", updateFriend);
      $http.put('/users/' + updateFriend._id, updateFriend).then(function(returned_data) {
        console.log("factory.update return data", returned_data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* index method: get all users 
       make http request to server side: routes -> controller
       controller returns json in the form of {data: { result: Object, status: Boolean }}
    */
    this.index = function(callback) {
      $http.get('/users').then(function(returned_data) {
        console.log("factory.index return data", returned_data.data);
        users = returned_data.data.result;
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* delete a friend */
    this.delete = function(friendid, callback) {
      $http.delete('/users/' + friendid).then(function(returned_data) {
        console.log("factory.delete return data", returned_data);
        if (typeof(callback) == 'function') {
          callback(); // this is index() to get all users
        }
      });
    };

    /* show a friend with specified id */
    this.show = function(friendid, callback) {
      $http.get('/users/' + friendid).then(function(returned_data) {
        console.log("factory.show return data", returned_data.data);
        friend = returned_data.data.result; 
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* get users from factory, not db */
    this.getFriends = function(callback) {
      if (typeof(callback) == 'function') {
        callback(users);
      }
    }; 
     
    /* get a friend from factory, not db */
    this.getFriend = function(friendid, callback) {
      console.log("factory.getFriend users", users);
      friend = users.filter(function(friendObj) {
        return friendObj._id === friendid;
      });
      console.log("factory.getFriend", friend[0]);
      if (typeof(callback) == 'function') {
        callback(friend[0]);
      }
    };

  };
  console.log(new usersFactory());
  return new usersFactory();
}]);
