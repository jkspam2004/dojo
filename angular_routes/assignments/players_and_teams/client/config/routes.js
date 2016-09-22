

var app = angular.module('app', ['ngRoute']);

/* routing */
app.config(function($routeProvider) {
  $routeProvider
    .when('/players', {
      controller: 'playersController',
      templateUrl: 'partials/players.html'
    })
    .when('/teams', {
      controller: 'teamsController',
      templateUrl: 'partials/teams.html'
    })
    .when('/associations', {
      controller: 'associationsController',
      templateUrl: 'partials/associations.html'
    })
    .when('/:teamname', {
      controller: 'teamController',
      templateUrl: 'partials/team.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});