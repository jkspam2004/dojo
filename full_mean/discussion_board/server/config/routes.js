console.log("server routes");
/* require controller file */
var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');

module.exports = function(app) {
  /* CRUD routes for users */
  app.get('/users', users.index);
  app.get('/users/:id', users.show);
  app.post('/users', users.create);
  app.put('/users/:id', users.update);
  app.delete('/users/:id', users.delete); 

  /* CRUD routes for topics */
  app.get('/topics', topics.index);
  app.get('/topics/:id', topics.show);
  app.post('/topics', topics.create);
  app.delete('/topics/:id', topics.delete); 

  /* posts and comments */
  app.post('/posts', topics.addPost);
  app.post('/comments', topics.addComment);
}
