console.log("client indexController");

app.controller("indexController", ['$scope', 'friendsFactory', function($scope, friendsFactory) {
  /* index(): accesses the friends factory and runs the friends index() */
  var index = function() { // not called $scope.index because accessed within controller only, not by view
    friendsFactory.index(function(returned_data) {
      console.log("index controller data", returned_data.result);
      if (returned_data.status) {
        $scope.friends = returned_data.result;
      } else {
        console.log("something wrong getting all friends", returned_data.result);
      }
    });
  };

  index();

  $scope.removeFriend = function(friend) {
    console.log("remove", friend);
    friendsFactory.delete(friend._id, index);
  }

}]);
