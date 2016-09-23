var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  console.log("client config routes");
  $routeProvider
    .when('/', { // display all friends
      controller: 'indexController',
      templateUrl: 'partials/index.html'
    })
    .when('/friends/new', { // display page to add friend
      controller: 'newController',
      templateUrl: 'partials/new.html'
    })
    .when('/friends/:id/edit', { // display page to edit a friend
      controller: 'editController',
      templateUrl: 'partials/edit.html'
    })
    .when('/friends/:id', { // display page to show a friend
      controller: 'showController',
      templateUrl: 'partials/show.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
