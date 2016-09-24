console.log("client showController");

app.controller("showController", function($scope, friendsFactory, $routeParams) {
  $scope.friendid = $routeParams.id; // comes from our client routes file (assets/app.js)
  $scope.message = '';

  friendsFactory.show($scope.friendid, function(returned_data) {
    if (returned_data.status) {
      $scope.friend = returned_data.result;
    } else {
      $scope.message = "error getting friend " + $scope.friendid, returned_data.result.message;
    }
  });

});
