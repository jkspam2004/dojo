var mongoose = require('mongoose');
var Course = mongoose.model('Course');

module.exports = {
  // display all the courses
  display: function(req, res) {
    Course.find({}, function(err, courses) {
      if (err) {
        console.log("something went wrong during find", err);
      } else {
        console.log("courses", courses);
      }
      res.render('index', { courses : courses });
    });
  },
  // add a new course
  create: function(req, res) {
    console.log("post data", req.body);
    var course = new Course({ name: req.body.name, description: req.body.description });
    course.save(function(err) { // callback function runs when db operations finish
      if (err) {
        console.log("something went wrong adding course", err);
      } else {
        console.log("successfully add a course!");
        res.redirect('/');
      }
    });
  },
  // get course info to display for editing
  edit: function(req, res) {
    console.log("edit");
    Course.findOne({ _id: req.params.id }, function(err, course) {
      if (err) {
        console.log("edit: error during find", err);
      } else {
        console.log("found course", course);
      }
      res.render('edit', { course : course });
    });
  },
  // update the course info
  update: function(req, res) {
    Course.findOne({ _id: req.params.id }, function(err, course) {
      if (err) {
        console.log("update: error looking for record", err);
      } else {
        course.name = req.body.name;
        course.description = req.body.description;
        course.save( function(err) {
          if (err) {
            console.log("error updating record", err);
          }
        });
      }
    });
    res.redirect('/courses/' + req.params.id);
  },
  // show course info
  show: function(req, res) {
    Course.findOne({ _id: req.params.id }, function(err, course) {
      if (err) {
        console.log("show: error during find", err);
      } else {
        console.log("found course", course);
      }
      res.render('show', { course : course });
    });

  },
  // delete a course
  destroy: function(req, res) {
    Course.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log("remove: error removing a course", err);
      } else {
        console.log("successfully removed a course");
      }
      res.redirect('/');
    });
  }
}
