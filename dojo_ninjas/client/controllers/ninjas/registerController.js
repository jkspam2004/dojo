app.controller("registerController", function($scope, ninjaFactory, $location) {
  console.log("client registerController");

  $scope.ninja_self = {};
  $scope.error;

  ninjaFactory.getNinjaSelf(function(returned_data) {
    console.log("getNinjaSelf client cont", returned_data);
    $scope.ninja_self = returned_data;
  });
  if ($scope.ninja_self.email) { // we have cached ninja, redirect to home
    $location.path('/welcome');
  }

  /* register(): ninja registration */
  $scope.register = function() { 
    if (!$scope.registration.email) { // check to see if email exists first. has to be defined
      console.log("email is blank");
      $scope.error = { message: "Registration error", errors: [{ message: "Email cannot be blank" }] };
    } else { // find ninja by email
      ninjaFactory.getByEmail($scope.registration.email, function(returned_data) {
        console.log("registerController data", returned_data);
        if (returned_data.status ) {
          if (returned_data.result) { 
            // ninja already in system
            console.log("found ninja", returned_data.result.first_name);
            $scope.error = { message: "Registration error", errors: [{ message: "Email already in use" }] };
          } else {
            // add the ninja if not already in our system
            console.log("add ninja", $scope.registration);
            ninjaFactory.create($scope.registration, function(returned_data) {
              console.log("added ninja return", returned_data);
              if ( returned_data.status ) {
                $scope.ninja_self = returned_data.result;
                console.log("added ninja", $scope.ninja_self);
                $location.url('/welcome');
              } else {
                $scope.error = returned_data.result;
                console.log("error adding ninja", returned_data.result);
                $scope.registration = {};
              }
            });
          }
        } else {
          console.log("something wrong ninjaFactory.getByEmail", returned_data.result);
        }
      }); // end ninjaFactory.getByEmail
    }
  };

});
