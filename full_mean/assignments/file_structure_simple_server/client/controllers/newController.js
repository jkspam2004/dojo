app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
  $scope.error = '';

  /* call factory to add friend */
  $scope.addFriend = function() {
    friendsFactory.create($scope.newFriend, function(returned_data) {
      if (returned_data.status) {
        console.log("successful add");

        $scope.newFriend = {}; // reset text box
        $location.path('/'); // load the root path partial
      } else {
        $scope.error = returned_data.result; 
        console.log("error adding", returned_data.result);
      }
    });
  };

}]);
