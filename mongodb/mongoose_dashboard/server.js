/* import modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* use modules */
var app = express();
app.use(bodyParser.urlencoded('body-parser'));
app.use(express.static(path.join(__dirname, './static')));

/* set up our view path and engine */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/* mongoose */
var host = "localhost"
mongoose.connect("mongodb://" + host + "/courses_dashboard");
var courseSchema = new mongoose.Schema({
  name: String,
  description: String,
});
mongoose.model('Course', courseSchema);
var Course = mongoose.model('Course');

/* root route */
app.get('/', function(req, res) {
  Course.find({}, function(err, courses) {
    if (err) {
      console.log("something went wrong during find", err);
    } else {
      console.log("courses", courses);
    }
    res.render('index', { courses : courses });
  });
});

/* create a new course */
app.get("/courses/new", function(req, res) {
  console.log("new");
  res.render('new');
});


/* post method to add new course */
app.post('/courses', function(req, res) {
  console.log("post data", req.body);
  var course = new Course({ name: req.body.name, description: req.body.description });
  course.save(function(err) { // callback function runs when db operations finish
    if (err) {
    } else {
      console.log("successfully add a course!");
      res.redirect('/');
    }
  });
});

/* display page to edit a course */
app.get('/courses/:id/edit', function(req, res) {
  console.log("edit");
  Course.findOne({ _id: req.params.id }, function(err, course) {
    if (err) {
      console.log("edit: error during find", err);
    } else {
      console.log("found course", course);
    }
    res.render('edit', { course : course });
  }); 

});

/* show one course */
app.get('/courses/:id', function(req, res) {
  Course.findOne({ _id: req.params.id }, function(err, course) {
    if (err) {
      console.log("show: error during find", err);
    } else {
      console.log("found course", course);
    }
    res.render('show', { course : course });
  }); 
});

/* update a course */
app.post('/courses/:id', function(req, res) {
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
});

/* delete a course */
app.post('/courses/:id/destroy', function(req, res) {
  Course.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log("remove: error removing a course", err);
    } else {
      console.log("successfully removed a course");
    }
    res.redirect('/');
  });
});

/* listener */
var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port " + port);
});
