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
    .when('/questions/new', { // display page to add question 
      controller: 'newQuestionController',
      templateUrl: 'partials/new_question.html'
    })
    .when('/questions/:id', { // display a specific question 
      controller: 'showQuestionController',
      templateUrl: 'partials/show_question.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
