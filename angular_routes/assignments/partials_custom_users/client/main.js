var myApp = angular.module('myApp', ['ngRoute']);
// set up routing
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/users.html'
    })
    .when('/list', {
      templateUrl: 'partials/list.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
// factory
myApp.factory('usersFactory', function() {
  var factory = {};

  var users = [
    { first_name: "Yukihiro", last_name: "Matsumoto", language: "Ruby" },
    { first_name: "Ryan", last_name: "Dahl", language: "JavaScript" },
    { first_name: "Brendan", last_name: "Eich", language: "JavaScript" },
    { first_name: "Larry", last_name: "Wall", language: "Perl" },
  ];
  // get users
  factory.index = function(callback) {
    callback(users);
  }
  // add a user
  factory.add = function(newUser, callback) {
    users.push({ first_name: newUser.first_name, last_name: newUser.last_name, language: newUser.language });
    callback(users);
  }
  // delete a user
  factory.delete = function(userToDelete, callback) {
    users.splice(users.indexOf(userToDelete), 1);
    callback(users);
  }

  return factory;
});

/* build the controllers */
//usersController
myApp.controller('usersController', function($scope, usersFactory, $location) {
  $scope.users = [];

  $scope.getUsers = function() {
    usersFactory.index(function(data) {
      $scope.users = data;
    });
  };
  $scope.getUsers();
  // add a user
  $scope.addUser = function() {
    usersFactory.add($scope.newUser, $scope.getUsers);
    $scope.newUser = {};
    $location.url('/list'); // redirect to /list url
  }
  // remove a user
  $scope.removeUser = function(userToDelete) {
    usersFactory.delete(userToDelete, $scope.getUsers);
  }

  // sort by column
  $scope.sortName = 'name';
  $scope.reverse = 'false';
  $scope.sortBy = function(sortName) {
    $scope.reverse = ($scope.sortName === sortName) ? !$scope.reverse: false;
    $scope.sortName = sortName;
  }
});

// user list controller
myApp.controller('listController', function($scope, usersFactory) {
  $scope.users = [];

  $scope.getUsers = function() {
    usersFactory.index(function(data) {
      $scope.users = data;
    });
  };
  $scope.getUsers();

  // sort by column
  $scope.sortName = 'name';
  $scope.reverse = 'false';
  $scope.sortBy = function(sortName) {
    $scope.reverse = ($scope.sortName === sortName) ? !$scope.reverse: false;
    $scope.sortName = sortName;
  }
});

