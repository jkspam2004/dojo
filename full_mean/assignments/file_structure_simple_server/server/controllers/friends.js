console.log("server friends controller");

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController() {
  this.index = function(req, res) {
    console.log("server index");
    Friend.find({}, function(err, friends) {
      if (err) {
        console.log("error finding friends");
        res.json({ status: false, result: err });
      } else {
        console.log("found friends", friends);
        res.json({ status: true, result: friends });
      }
    });
  };
  this.create = function(req, res) {
    console.log("server create body: ", req.body);
    var friend = new Friend({ 
      first_name: req.body.first_name, 
      last_name:  req.body.last_name,
      birthday:   new Date(req.body.birthday)
    });
    friend.save(function(err) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        res.json({ status: true, result: friend });
      }
    });
  };
  this.update = function(req, res) {
    console.log("server update params", req.params);
    console.log("server update body", req.body);
    Friend.findOne({ _id: req.body._id }, function(err, friend) {
      if (err) {
        //res.json({ status: false, result: err });
      } else {
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.birthday = new Date(req.body.birthday);
       
        friend.save( function(err) {
          console.log("saving");
          if (err) {
            res.json({ status: false, result: friend });
          } else {
            res.json({ status: true, result: friend });
          }
        }); 
      }
    });
  };
  this.delete = function(req, res) {
    console.log("server delete body", req.body);
    console.log("server delete params", req.params);
    Friend.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.json({ status: false, result : err });
      } else {
        res.json({ status: true, result: "successfully removed " + req.params });
      }
    });
  };
  this.show = function(req, res) {
    console.log("server show");
    Friend.findOne({ _id: req.params.id }, function(err, friend) {
      if (err) {
        res.json({ status: true, result: err });
      } else {
        res.json({ status: true, result: friend });
      }
    });
  };
}
module.exports = new FriendsController();

