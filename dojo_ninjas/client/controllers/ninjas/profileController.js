app.controller("profileController", function($scope, ninjaFactory, $location) {
  console.log("client profileController");

  $scope.ninja_self = {};
  $scope.error;

  ninjaFactory.getNinjaSelf(function(returned_data) {
    console.log("getNinjaSelf client contr", returned_data);
    $scope.ninja_self = returned_data;
  });
  if (!$scope.ninja_self.email) { // no ninja, login please
    $location.path('/login');
  }


});
