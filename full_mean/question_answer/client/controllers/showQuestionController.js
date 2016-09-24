app.controller("showQuestionController", ['$scope', 'usersFactory', 'questionsFactory','$location', '$routeParams', function($scope, usersFactory,questionsFactory, $location, $routeParams) {
  console.log("showQuestionController");

  $scope.question = {};
  $scope.questionid = $routeParams.id;

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) {
    $location.path('/');
  }

  /* get info for specific question */
  var show = function() {
    questionsFactory.show($scope.questionid, function(returned_data) {
      console.log("questions returned", returned_data);
      if (returned_data.status) {
        $scope.question = returned_data.result;
        console.log($scope.question);
      } else {
        console.log("error getting questions", returned_data.result);
      }
    }); 
  }
  show();

  /* add like and pass show() as the callback */
  $scope.addLike = function(val) {
    console.log("answer", val);
    var answer = { _id: val, userid: $scope.user._id };
    questionsFactory.addLike(answer, show);
  }


}]);
