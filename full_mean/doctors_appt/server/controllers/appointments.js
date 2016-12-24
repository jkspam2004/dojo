console.log("server appointments controller");

/* controller method for User model */
var mongoose = require('mongoose');
var Appt = mongoose.model('Appointments');

function Controller() {
  /* get all appointment results */
  this.index = function(req, res) {
    console.log("server appt index");
    Appt.find({}, function(err, results) {
      if (err) {
        console.log("error finding results");
        res.json({ status: false, result: err });
      } else {
        console.log("found results", results);
        res.json({ status: true, result: results });
      }
    });
  };
  /* find appointments for a user */
  this.show = function(req, res) {
    console.log("server find appt body: ", req.body);
    Appt.findOne({ name: req.body.name }, function(err, user) {
      if (err) {
        res.json({ status: false, result: err });
      } 
    });
  };

  /* add an appointment */
  this.create = function(req, res) {
    console.log("server create appt body: ", req.body);
    var appt = new Appt({ 
      name:      req.body.name, 
      appt_date: req.body.date,
      appt_time: req.body.time,
      complaint: req.body.complaint,
    });

    appt.save(function(err) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        res.json({ status: true, result: appt });
      }
    });
  };

}
module.exports = new Controller();

