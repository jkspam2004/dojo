/* require controllers file */
var courses = require('../controllers/courses.js');

module.exports = function(app) {
  /* root route */
  app.get('/', function(req, res) {
    courses.display(req, res);
  });

  /* create a new course */
  app.get("/courses/new", function(req, res) {
    console.log("new");
    res.render('new');
  });

  /* post method to add new course */
  app.post('/courses', function(req, res) {
    courses.create(req, res);
  });

  /* display page to edit a course */
  app.get('/courses/:id/edit', function(req, res) {
    courses.edit(req, res);
  });

  /* show one course */
  app.get('/courses/:id', function(req, res) {
    courses.show(req, res);
  });

  /* update a course */
  app.post('/courses/:id', function(req, res) {
    courses.update(req, res);
  });

  /* delete a course */
  app.post('/courses/:id/destroy', function(req, res) {
    courses.destroy(req, res);
  });
}
