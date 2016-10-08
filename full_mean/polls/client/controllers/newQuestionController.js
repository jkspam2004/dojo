app.controller("newQuestionController", function($scope, usersFactory, questionsFactory, $location) {
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

    // add the question
    questionsFactory.create($scope.newQuestion, function(returned_data) {
      if (returned_data.status) {
        console.log("successful question add", returned_data);
        // get the id of the question just added successfully
        $scope.newQuestion._id = returned_data.result._id;


        /* ugggly solution. not sure why the variable $scope.newQuestion.opt kept saving the last value from options */

        // now add options
        $scope.newQuestion.opt = '';
        $scope.newQuestion.opt = $scope.newQuestion.option1;
        questionsFactory.addOption1($scope.newQuestion, function(data_returned) {
          if (data_returned.status) {
            console.log("sucessfull add of option", data_returned);
            $scope.newQuestion.opt = '';
          } else {
            $scope.error = data_returned.result; 
            console.log("error adding option", data_returned.result);
            $scope.newQuestion.opt = '';
          }
        });
        $scope.newQuestion.opt = $scope.newQuestion.option2;
        questionsFactory.addOption2($scope.newQuestion, function(data_returned) {
          if (data_returned.status) {
            console.log("sucessfull add of option", data_returned);
            $scope.newQuestion.opt = '';
          } else {
            $scope.error = data_returned.result; 
            console.log("error adding option", data_returned.result);
            $scope.newQuestion.opt = '';
          }
        });
        $scope.newQuestion.opt = $scope.newQuestion.option3;
        questionsFactory.addOption3($scope.newQuestion, function(data_returned) {
          if (data_returned.status) {
            console.log("sucessfull add of option", data_returned);
            $scope.newQuestion.opt = '';
          } else {
            $scope.error = data_returned.result; 
            console.log("error adding option", data_returned.result);
            $scope.newQuestion.opt = '';
          }
        });
        $scope.newQuestion.opt = $scope.newQuestion.option4;
        questionsFactory.addOption4($scope.newQuestion, function(data_returned) {
          if (data_returned.status) {
            console.log("sucessfull add of option", data_returned);
            $scope.newQuestion.opt = '';
          } else {
            $scope.error = data_returned.result; 
            $scope.newQuestion.opt = '';
            console.log("error adding option", data_returned.result);
          }
        });

        
/*
        for (var i in $scope.newQuestion.options) {
          console.log($scope.newQuestion.options[i]);
          $scope.newQuestion.option = $scope.newQuestion.options[i];
          questionsFactory.addOption($scope.newQuestion, function(data_returned) {
            if (data_returned.status) {
              console.log("sucessfull add of option", data_returned);
            } else {
              $scope.error = data_returned.result; 
              console.log("error adding option", data_returned.result);
            }
          });
        }
*/

        $location.path('/dashboard'); // load the root path partial
        $scope.newQuestion = {}; // reset text boxes
      } else {
        $scope.error = returned_data.result; 
        console.log("error adding", returned_data.result);
      }
    });
  };


});
