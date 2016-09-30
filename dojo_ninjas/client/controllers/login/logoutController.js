app.controller("logoutController", function($scope, ninjaFactory, $location) {
  console.log("client logoutController");

  /* reset ninja object and render login page */
  $scope.ninja = {};
  ninjaFactory.resetCache();

  $location.path('/login');
  

});
