console.log("server routes");

var ninjas = require('../controllers/ninjas.js');
var events = require('../controllers/events.js');
//var resources = require('../controllers/resources.js');

module.exports = function(app) {
  app.get('/ninjas/:campus/campus', ninjas.getByCampus);
  app.get('/ninjas/:id/id', ninjas.getById);
  app.get('/ninjas/:email/email', ninjas.getByEmail);
  app.post('/ninjas/:email/login', ninjas.login);
  app.post('/ninjas', ninjas.create);
  app.put('/ninjas/:id', ninjas.update);
  app.delete('/ninjas/:id', ninjas.delete);

/*
  app.get('/events/', events.index);
  app.get('/events/:id', events.show);
  app.post('/events', events.create);
  app.put('/events/:id', events.update);
  app.delete('/events/:id', events.delete);

  app.get('/resources/', resources.index);
  app.get('/resources/:id', resources.show);
  app.post('/resources', resources.create);
  app.put('/resources/:id', resources.update);
  app.delete('/resources/:id', resources.delete);
*/

}
