var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  console.log("client config routes");
  $routeProvider
    .when('/', { // display "login" page
      controller: 'indexController',
      templateUrl: 'partials/index.html'
    })
    .when('/appointments', { // display dashboard
      controller: 'appointmentController',
      templateUrl: 'partials/appointments.html'
    })
    .when('/appointments/new', { // display add appt page
      controller: 'newAppointmentController',
      templateUrl: 'partials/new_appointment.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
