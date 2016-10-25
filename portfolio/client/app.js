var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  console.log("client config routes");
  $routeProvider
    .when('/', { // display login box
      controller: 'loginController',
      templateUrl: 'partials/login.html'
    })
    .when('/dashboard', { // display dashboard of questions 
      controller: 'dashboardController',
      templateUrl: 'partials/dashboard.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
