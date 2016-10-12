app.controller("dashboardController", function($scope, usersFactory, $location) {
  console.log("dashboardController");

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) {
//    $location.path('/');
  }



});
