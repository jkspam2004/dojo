app.controller("dashboardController", ['$scope', 'usersFactory', 'questionsFactory','$location', function($scope, usersFactory,questionsFactory, $location) {
  console.log("dashboardController");
  $scope.questions = [];

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) {
    $location.path('/');
  }

  questionsFactory.get(function(returned_data) {
    console.log("questions returned", returned_data);
    if (returned_data.status) {
      $scope.questions = returned_data.result;
    } else {
      console.log("error getting questions", returned_data.result);
    }
  }); 


}]);
