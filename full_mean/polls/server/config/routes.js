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
  app.delete('/questions/:id', questions.delete);

  /* option */
  app.post('/options1', questions.addOption1);
  app.post('/options2', questions.addOption2);
  app.post('/options3', questions.addOption3);
  app.post('/options4', questions.addOption4);
  app.post('/options/:id', questions.addVote);
}
