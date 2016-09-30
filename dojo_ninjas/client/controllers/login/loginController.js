app.controller("loginController", function($scope, ninjaFactory, $location) {
  console.log("client loginController");

  // Todo: look into to tokens 

  $scope.ninja_self = {};
  $scope.error;

  ninjaFactory.getNinjaSelf(function(returned_data) {
    console.log("getNinjaSelf client contr", returned_data);
    $scope.ninja_self = returned_data;
  });
  if ($scope.ninja_self.email) { // we have cached ninja, redirect to home
    $location.path('/welcome');
  }

  /* login(): logs the ninja in */
  $scope.login = function() { 
    ninjaFactory.login($scope.newLogin, function(returned_data) {
      console.log("loginController data", returned_data);
      if (returned_data.status ) {
        if (returned_data.result) { // successful login
          $scope.ninja_self = returned_data.result;
          $scope.newLogin= {};
          console.log("found ninja", returned_data.result.first_name);
          $location.url('/welcome');
        } else {
          console.log("invalid login", returned_data.result);
          $scope.error = { message: "Login error", errors: [{ message: "Invalid login" }] };
        }
      } else {
        console.log("something wrong getting ninja", returned_data.result);
        $scope.error = returned_data.result;
      }
    });
  };
});
