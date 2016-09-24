app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
  $scope.id = $routeParams.id;
  console.log("editController id", $scope.id);
  /* get a friend from the factory. one time get to load the partial. no need to set a variable for reuse. */
  friendsFactory.getFriend($scope.id, function(returnedData) {
    $scope.friend = returnedData;
    $scope.friend.birthday = new Date( returnedData.birthday );
    console.log("edit friend", $scope.friend);  
  });

  /* update a friend */
  $scope.updateFriend = function() {
    console.log("controller updateFriend", $scope.friend);
    friendsFactory.update($scope.friend, function(returned_data) {
      if (returned_data.status) {
        $scope.message = "Successfully updated friend";
        console.log("successful update");

        $scope.friend = {}; // reset text box
        //$location.path('/friends/' + $scope.friend._id); // load the root path partial
      } else {
        $scope.message = "Error updating friend: " + returned_data.result.message; 
        console.log("error updating", returned_data.result);
      }
   });
  };

}]);
