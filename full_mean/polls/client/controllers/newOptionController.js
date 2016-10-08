app.controller("newAnswerController", function($scope, usersFactory,questionsFactory, $location, $routeParams) {
  console.log("newAnswerController");

  $scope.question = {};
  $scope.questionid = $routeParams.id;

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) { // redirect to login page if no user
    $location.path('/');
  }

  /* get info for specific question */
  questionsFactory.show($scope.questionid, function(returned_data) {
    console.log("questions returned", returned_data);
    if (returned_data.status) {
      $scope.question = returned_data.result;
      console.log($scope.question);
    } else {
      console.log("error getting questions", returned_data.result);
    }
  }); 

  $scope.cancelAnswer = function() {
    $scope.newAnswer = {};
  };

  $scope.addAnswer = function() {
    $scope.newAnswer.userid = $scope.user._id; // get the logged in user who is posting question
    $scope.newAnswer._id = $scope.questionid;

    console.log("newAnswer:", $scope.newAnswer);
    questionsFactory.addAnswer($scope.newAnswer, function(returned_data) {
      if (returned_data.status) {
        console.log("successful add");

        $scope.newAnswer = {}; // reset text boxes
        $location.path('/dashboard'); // load the root path partial
      } else {
        $scope.error = returned_data.result; 
        console.log("error adding", returned_data.result);
      }
    });
  };

});
