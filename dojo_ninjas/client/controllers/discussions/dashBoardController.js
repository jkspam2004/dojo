app.controller("dashboardController", ['$scope', 'ninjaFactory', 'topicFactory','$location', function($scope, ninjaFactory, topicFactory, $location) {
  console.log("dashboardController");
  $scope.topics = [];

  ninjaFactory.getNinjaSelf(function(returned_data) {
    $scope.ninja_self = returned_data;
  });
  if (!$scope.ninja_self.email) {
    $location.path('/');
  }

  topicFactory.get(function(returned_data) {
    console.log("topics returned", returned_data);
    if (returned_data.status) {
      $scope.topics = returned_data.result;
    } else {
      console.log("error getting topics", returned_data.result);
    }
  }); 


}]);
