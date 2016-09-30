app.controller("welcomeController", function($scope, ninjaFactory, $location) {
  console.log("client chatroomController");

  $scope.error;
  $scope.ninja_self = {};

  ninjaFactory.getNinjaSelf(function(returned_data) {
    console.log("getNinjaSelf client contr", returned_data);
    $scope.ninja_self = returned_data;
  });
  if (!$scope.ninja_self.email) { // no ninja, login please
    $location.path('/login');
  }

});
