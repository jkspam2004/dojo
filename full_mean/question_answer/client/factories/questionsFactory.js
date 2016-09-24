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

    /* add an answer to a question */
    this.addAnswer = function(newAnswer, callback) {
      $http.post('/answers', newAnswer).then(function(returned_data) {
        console.log("factory.addAnswer return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* add a like to an answer */
    this.addLike = function(answer, callback) {
      $http.post('/answers/' + answer._id, answer).then(function(returned_data) {
        console.log("factory.addAnswer return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

  }
  console.log(new questionsFactory());
  return new questionsFactory();

}]);

