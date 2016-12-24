app.controller("newAppointmentController", function($scope, $filter, appointmentFactory, $location, $routeParams, $log) {
  console.log("AppointmentController");

  $scope.appointment = {};
  $scope.questionid = $routeParams.id;
  $scope.newAppt = {};

  $scope.error = {};

  appointmentFactory.getUser(function(returned_data) {
    $scope.user = returned_data;
  });
  if (!$scope.user) { // redirect to login page if no user
//    $location.path('/');
  }

  var today = new Date();
  console.log("today: ", today)
  console.log("typeof today", typeof(today));
  console.log("getDate", today.getDate());
  console.log("getHours", today.getHours());
  console.log("getMinutes", today.getMinutes());
  //today.setHours(0,0,0,0);

  $scope.newAppt.date = today;
  /* use watcher to get get time portion from date */
//  $scope.newAppt.time = today;
//  $scope.newAppt.time.setSeconds(0);
//  $scope.newAppt.time.setMilliseconds(0);
//  $scope.$watch('newAppt.time', function(date){
//    $scope.newAppt.time = $filter('date')(date, 'shortTime');
//  });

  $scope.today = today.toISOString();
  console.log("today iso: ", $scope.today)


  /* get appointments for a user */
/*
  appointmentFactory.show($scope.questionid, function(returned_data) {
    console.log("questions returned", returned_data);
    if (returned_data.status) {
      $scope.question = returned_data.result;
      console.log($scope.question);
    } else {
      console.log("error getting questions", returned_data.result);
    }
  }); 
*/

  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30, 60]
  };

  $scope.ismeridian = true;
  $scope.changed = function () {
    $log.log(typeof($scope.mytime));
    $log.log('Time changed to: ' + $scope.mytime);
  };



  /* cancelling add goes back to appointments dashboard page */
  $scope.cancelAdd = function() {
    $location.path('/appointments');
  };

  /* add the appointment after validation */
  $scope.addAppt = function(error) {
    console.log("error?", error);

    if (!$scope.newAppt) {
      $scope.error = { message: "Invalid Date", errors: [{ message: "Date is required" }] };
      $location.path('/appointments/new');
    } else {

      console.log("typeof");
      console.log(typeof($scope.newAppt.date));
      console.log("date after typeof", $scope.newAppt.date);

      var newdate = new Date($scope.newAppt.date);
      if (newdate == 'Invalid Date') {
        $scope.error = { message: "Invalid Date", errors: [{ message: "Date must be in the future" }] };
      } else {
        var month = $scope.newAppt.date.getMonth() + 1;
        var day = $scope.newAppt.date.getDate() + 1;
        var year = $scope.newAppt.date.getFullYear() + 1;

      }

      var newtime = new Date($scope.newAppt.time);

      $scope.newAppt.name = $scope.user; // get the logged in user

      console.log("newAppt:", $scope.newAppt);
      appointmentFactory.create($scope.newAppt, function(returned_data) {
        if (returned_data.status) {
          console.log("successful add");

          $scope.newAppt = {}; // reset text boxes
          $location.path('/appointments'); // load the root path partial
        } else {
          $scope.error = returned_data.result; 
          console.log("error adding", returned_data.result);
        }
      });

    };

  }

});
