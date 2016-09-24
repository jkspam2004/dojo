console.log("server users controller");

/* controller method for User model */
var mongoose = require('mongoose');
var User = mongoose.model('User');

function Controller() {
  /* get all results for users */
  this.index = function(req, res) {
    console.log("server index");
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
    console.log("server create body: ", req.body);
    var result = new User({ 
      username: req.body.username, 
      topics: req.body.topics ? req.body.topics : 0,
      posts: req.body.posts ? req.body.posts : 0,
      comments: req.body.comments ? req.body.comments : 0,
    });
    result.save(function(err) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        res.json({ status: true, result: result });
      }
    });
  };
  /* update specified user */
  this.update = function(req, res) {
    console.log("server update params", req.params);
    console.log("server update body", req.body);
    User.findOne({ _id: req.body._id }, function(err, result) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        result.username = req.body.username;
        result.topics   = req.body.topics ? req.body.topics : 0;
        result.posts    = req.body.posts ? req.body.posts : 0;
        result.comments = req.body.comments ? req.body.comments : 0;
       
        result.save( function(err) {
          console.log("saving");
          if (err) {
            res.json({ status: false, result: result });
          } else {
            res.json({ status: true, result: result });
          }
        }); 
      }
    });
  };
  /* delete one user */
  this.delete = function(req, res) {
    console.log("server delete body", req.body);
    console.log("server delete params", req.params);
    User.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.json({ status: false, result : err });
      } else {
        res.json({ status: true, result: "successfully removed " + req.params.id });
      }
    });
  };
  /* show info for one user */
  this.show = function(req, res) {
    console.log("server users show", req.params);
    User.findOne({ _id: req.params.id }, function(err, result) {
      if (err) {
        res.json({ status: true, result: err });
      } else {
        res.json({ status: true, result: result });
      }
    });
  };
}
module.exports = new Controller();
