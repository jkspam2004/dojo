console.log("topics factory");

app.factory('topicFactory', ['$http', function($http) {
  function topicFactory() {
    var _this = this;

    /* get all the topics for display */
    this.get = function(callback) {
      $http.get('/topics').then(function(returned_data) {
        console.log("topicFactory.get return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* create a new topic */
    this.create = function(newQuestion, callback) {
      $http.post('/topics', newQuestion).then(function(returned_data) {
        console.log("factory.create return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* get data for a specific topic */
    this.show = function(topicid, callback) {
      $http.get('/topics/' + topicid).then(function(returned_data) {
        console.log("factory.show return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* add an comment to a topic */
    this.addComment = function(newComment, callback) {
      $http.post('/comments', newComment).then(function(returned_data) {
        console.log("factory.addComment return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    /* add a like to an comment */
    this.addLike = function(comment, callback) {
      $http.post('/comments/' + comment._id, comment).then(function(returned_data) {
        console.log("factory.addComment return data", returned_data.data);
        if (typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

  }
  console.log(new topicFactory());
  return new topicFactory();

}]);


