console.log("server users controller");

/* controller method for User model */
var mongoose = require('mongoose');
var User = mongoose.model('User');

function Controller() {
  /* get all results for users */
  this.index = function(req, res) {
    console.log("server users index");
    User.find({}, function(err, results) {
      if (err) {
        console.log("error finding results");
        res.json({ status: false, result: err });
      } else {
        console.log("found results", results);
        res.json({ status: true, result: results });
      }
    });
  };
  /* add one user */
  this.create = function(req, res) {
    console.log("server users create body: ", req.body);
    var result = new User({ 
      username: req.body.username, 
    });
    result.save(function(err) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        res.json({ status: true, result: result });
      }
    });
  };
  /* get info for one user */
  this.show = function(req, res) {
    console.log("server users show", req.params);
    User.findOne({ username: req.params.username }, function(err, result) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        res.json({ status: true, result: result });
      }
    });
  };
}
module.exports = new Controller();
