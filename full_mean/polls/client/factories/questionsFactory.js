console.log("questions factory");

app.factory('questionsFactory', ['$http', function($http) {
  function questionsFactory() {
    var _this = this;

    /* get all the questions for display */
    this.get = function(callback) {
      $http.get('/questions').then(function(returned_data) {
        console.log("questionsFactory.get return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* create a new question */
    this.create = function(newQuestion, callback) {
      $http.post('/questions', newQuestion).then(function(returned_data) {
        console.log("factory.create return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* get data for a specific question */
    this.show = function(questionid, callback) {
      $http.get('/questions/' + questionid).then(function(returned_data) {
        console.log("factory.show return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* add an option to a question */
    this.addOption1 = function(newOption, callback) {
      $http.post('/options1', newOption).then(function(returned_data) {
        console.log("factory.addOption return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };
    /* add an option to a question */
    this.addOption2 = function(newOption, callback) {
      $http.post('/options2', newOption).then(function(returned_data) {
        console.log("factory.addOption return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };
    /* add an option to a question */
    this.addOption3 = function(newOption, callback) {
      $http.post('/options3', newOption).then(function(returned_data) {
        console.log("factory.addOption return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };
    /* add an option to a question */
    this.addOption4 = function(newOption, callback) {
      $http.post('/options4', newOption).then(function(returned_data) {
        console.log("factory.addOption return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* add a vote to an option */
    this.addVote = function(option, callback) {
      $http.post('/options/' + option._id, option).then(function(returned_data) {
        console.log("factory.addOption return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* delete a question */
    this.delete = function(questionid, callback) {
      $http.delete('/questions/' + questionid).then(function(returned_data) {
        console.log("factory.delete return data", returned_data);
        if (typeof(callback) == 'function') {
          callback(); // this is index() to get all friends
        }
      });
    };

  }
  console.log(new questionsFactory());
  return new questionsFactory();

}]);

