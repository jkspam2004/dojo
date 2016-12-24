console.log("appointment factory");

app.factory('appointmentFactory', ['$http', function($http) {
  var user = '';
  function appointmentFactory() {
    var _this = this;

    /* set the user */
    this.setUser = function(data) {
      console.log("set data", data);
      user = data; 
    }

    this.getUser = function(callback) {
      console.log("get user", user);
      callback(user);
    }

    /* get all the appointments for display */
    this.get = function(callback) {
      $http.get('/appointments').then(function(returned_data) {
        console.log("appointments.get return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* create a new appointment */
    this.create = function(newAppointment, callback) {
      $http.post('/appointments', newAppointment).then(function(returned_data) {
        console.log("factory.create return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* get data for a specific appointment */
    this.show = function(appointmentid, callback) {
      $http.get('/appointments/' + appointmentid).then(function(returned_data) {
        console.log("factory.show return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

  }
  console.log(new appointmentFactory());
  return new appointmentFactory();

}]);

