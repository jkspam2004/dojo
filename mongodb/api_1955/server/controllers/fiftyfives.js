var mongoose = require('mongoose');
var FiftyFive = mongoose.model('FiftyFive');

module.exports = {
  index: function(req, res) {
    FiftyFive.find({}, function(err, people) {
      if (err) {
        res.json({ error : err });   
      } else {
        res.json( people );   
      }
    });
  },
  create: function(req, res) {
    console.log(req.params);
    var people = new FiftyFive({ name: req.params.name });
    people.save(function(err) {
      if (err) {
        console.log("something went wrong during save", err);
      } else {
        console.log("successfully added a person");
      }
      res.redirect('/');
    });
  },
  show: function(req, res) {
    FiftyFive.findOne({ name: req.params.name }, function(err, person) {
      if (err) {
        res.json({ error : err }); 
      } else {
        res.json(person); 
      }
    });
  },
  destroy: function(req, res) {
    FiftyFive.remove({ name: req.params.name }, function(err) {
      if (err) {
        console.log("something went wrong removing " + req.params.name + "error ", err);
      } else {
        console.log("successfully removed " + req.params.name);
      }
    });
    res.redirect('/');
  }
}
