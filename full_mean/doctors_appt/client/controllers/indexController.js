app.controller("indexController", function($scope, $location, appointmentFactory) {
  console.log("client indexController");
  $scope.user = ''
  
  $scope.login = function() {
    $scope.user = $scope.newUser.name;
    appointmentFactory.setUser($scope.newUser.name); 
    $location.path('/appointments');
  }

});
