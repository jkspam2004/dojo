app.controller("newQuestionController", ['$scope', 'usersFactory', 'questionsFactory','$location', function($scope, usersFactory,questionsFactory, $location) {
  console.log("newQuestionController");
  $scope.questions = [];

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) {
    $location.path('/');
  }

  $scope.addQuestion = function() {
    $scope.newQuestion.userid = $scope.user._id; // get the logged in user who is posting question

    questionsFactory.create($scope.newQuestion, function(returned_data) {
      if (returned_data.status) {
        console.log("successful add");

        $scope.newQuestion = {}; // reset text boxes
        $location.path('/dashboard'); // load the root path partial
      } else {
        $scope.error = returned_data.result; 
        console.log("error adding", returned_data.result);
      }
    });
  };


}]);
