var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  console.log("client config routes");
  $routeProvider
    .when('/', { // display login box
      controller: 'indexController',
      templateUrl: 'partials/index.html'
    })
    .when('/users/new', { // display page to add friend
      controller: 'newController',
      templateUrl: 'partials/new.html'
    })
    .when('/users/:id/edit', { // display page to edit a friend
      controller: 'editController',
      templateUrl: 'partials/edit.html'
    })
    .when('/users/:id', { // display page to show a friend
      controller: 'showController',
      templateUrl: 'partials/show.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
