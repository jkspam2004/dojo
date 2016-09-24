console.log("server routes");
/* require controller file */
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');

module.exports = function(app) {
  /* CRUD routes for users, only needed ones */
  app.get('/users', users.index);
  app.get('/users/:username', users.show);
  app.post('/users', users.create);

  /* CRUD routes for questions */
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.post('/questions', questions.create);

  /* answer */
  app.post('/answers', questions.addAnswer);
  app.post('/answers/:id', questions.addLike);
}
