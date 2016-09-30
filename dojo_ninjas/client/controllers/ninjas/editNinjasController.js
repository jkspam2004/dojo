app.controller("editNinjasController", function($scope, ninjaFactory, $location) {
  console.log("client editNinjasController");

  $scope.error;
  $scope.ninja_self = {};
  $scope.editProfile = {};

  ninjaFactory.getNinjaSelf(function(returned_data) {
    console.log("getNinjaSelf client contr", returned_data);
    $scope.ninja_self = returned_data;
    $scope.editProfile = returned_data;
  });
  if (!$scope.ninja_self.email) { // no ninja, login please
    $location.path('/login');
  }

  $scope.update = function() {
    console.log("input", $scope.editProfile);
    if ($scope.editProfile.avatar) {
      console.log("got an avatar", $scope.editProfile.avatar);
      if ($scope.editProfile.avatar.base64) {
        $scope.editProfile.avatar = $scope.editProfile.avatar.base64; 
      }
    }
    ninjaFactory.updateProfile($scope.editProfile, function(returned_data) {
      if (returned_data.status) {
        console.log("successful update");

        $scope.editProfile = {}; // reset text box
        $location.path('/profile'); // load the root path partial
      } else {
        $scope.error = returned_data.result; 
        console.log("error updating", returned_data.result);
      }
   });

  }

});
