app.controller("dashboardController", function($scope, usersFactory, questionsFactory, $location) {
  console.log("dashboardController");
  $scope.questions = [];

  usersFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user.username) {
    $location.path('/');
  }

  var index = function()  {
    questionsFactory.get(function(returned_data) {
      console.log("questions returned", returned_data);
      if (returned_data.status) {
        $scope.questions = returned_data.result;

        // display the delete button if owner of question
        for (var i=0; i<$scope.questions.length; i++) {
          if ($scope.questions[i]._poster.username == $scope.user.username) {
            $scope.questions[i].owner = true;
          }
        }
      } else {
        console.log("error getting questions", returned_data.result);
      }
    }); 
  }
  index();

  $scope.delete = function(question) {
    console.log("delete", question);
    questionsFactory.delete(question._id, index);
  }


});
