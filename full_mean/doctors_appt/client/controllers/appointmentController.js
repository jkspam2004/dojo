app.controller("appointmentController", function($scope, appointmentFactory, $location) {
  console.log("appointmentController");
  $scope.appointments = [];
  $scope.user = '';

  /* get the logged in user */
  appointmentFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user) {
    $location.path('/');
  }


  /* get all the appointments */  

  appointmentFactory.get(function(returned_data) {
    console.log("appointment returned", returned_data);
    if (returned_data.status) {
      $scope.appointments = returned_data.result;

      for (var i=0; i<$scope.appointments.length; i++) {
        var d = new Date($scope.appointments[i].appt_time);
      console.log("newd", d);
      var newhour = d.getHours();
      var newtime = d.getMinutes();
      console.log("newtime", newhour);
      console.log("newtime", newtime);
        $scope.appointments[i].appt_time = d.getHours() + ':' + d.getMinutes();
      }
    } else {
      console.log("error getting questions", returned_data.result);
    }
  }); 


});
