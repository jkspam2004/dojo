var app = angular.module('app', ['ngRoute', 'naif.base64']);

app.config(function($routeProvider) {
  console.log("client config routes");
  $routeProvider
    .when('/', {
      controller: 'eventsController', // events page
      templateUrl: 'partials/events/index.html',
    })
    .when('/login', { // login page
      controller: 'loginController',
      templateUrl: 'partials/login/login.html',
    })
    .when('/welcome', {
      controller: 'welcomeController', // events page
      templateUrl: 'partials/login/welcome.html',
    })
    .when('/logout', { // handle logout and redirect to login
      controller: 'logoutController',
      templateUrl: 'partials/login/login.html',
    })
    .when('/register', { // registration page
      controller: 'registerController',
      templateUrl: 'partials/ninjas/register.html',
    })
    .when('/profile', { // profile page
      controller: 'profileController',
      templateUrl: 'partials/ninjas/profile.html'
    })
    .when('/ninjadex', { // display all ninjas
      controller: 'ninjaDexController',
      templateUrl: 'partials/ninjas/ninjadex.html'
    })
    .when('/ninjas/:id/edit', { // display page to edit a ninja
      controller: 'editNinjasController',
      templateUrl: 'partials/ninjas/edit.html'
    })
    .when('/events', {
      controller: 'eventsController', // events page
      templateUrl: 'partials/events/index.html',
    })
    .when('/chatroom', { // chatroom
      controller: 'chatroomController',
      templateUrl: 'partials/chatrooms/index.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});
