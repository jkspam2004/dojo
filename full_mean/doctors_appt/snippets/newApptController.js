myAppModule.controller('NewApptController', function(NewApptFactory, ApptFactory, $scope, $location, $localStorage, $routeParams) {
  
  var apptList = [];

  $scope.tomorrow = new Date();
  $scope.tomorrow.setDate($scope.tomorrow.getDate() + 1);
  console.log("this is tomorrow's date: ",$scope.tomorrow);
  $scope.userName = $localStorage.User.user_name;

  ApptFactory.get_all_appts(function(data){
    apptList = data;
  })

  $scope.cancelAppt = function() {
    console.log("cancel button is pressed!");
    $location.url('/appointments');
  }

  $scope.createNewAppt = function(newAppt) {
    var count = 0;

    for (var i=0; i<apptList.length; i++) {
      console.log("apptList[i].date: ",Date.parse(apptList[i].date) )
      console.log("newAppt.date: ", Date.parse(newAppt.date))
      if (Date.parse(apptList[i].date) == Date.parse(newAppt.date)) {
        count ++;
        console.log('there are more appts on this day: ', newAppt.date)
      }
    }
    console.log("total appt is: ", count);

    if (count > 3) {
      $scope.message = "Dr already had 3 appointments that day and can't schedule any more!"
    }
    else {

      NewApptFactory.createAppt(newAppt, function(data) {
        $scope.newAppt = ""
        $location.path('/appointments');
      })

    }
  }

})
  
