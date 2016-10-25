app.controller("loginController", function($scope, usersFactory, $location) {
  console.log("client loginController");
  $scope.user = {};
  $scope.error = {};

  /* login(): accesses the users factory */
  $scope.login = function() { // not called $scope.index because accessed within controller only, not by view
    usersFactory.get($scope.newUser.username, function(returned_data) {
      console.log("loginController data", returned_data);
      if (returned_data.status ) {
        if (returned_data.result) {
          $scope.user = returned_data.result;
          $scope.newUser = {};
          console.log("found user", returned_data.result.username);
          $location.url('/dashboard');
        } else { 
          // add the user if not already in our system
          console.log("add user");
          $scope.user = returned_data.result;
          usersFactory.create($scope.newUser, function(returned_data) {
            console.log("added user return", returned_data);
            if ( returned_data.status ) {
              $scope.user = returned_data.result; 
              console.log("added user", $scope.user);
              $location.url('/dashboard');
            } else {
              $scope.error = returned_data.result;
              console.log("error adding user", returned_data.result);
              $scope.newUser = {};
            }
          });
        }
      } else {
        console.log("something wrong getting all friends", returned_data.result);
      }
      console.log("our user", $scope.user);
    });
  };


});

