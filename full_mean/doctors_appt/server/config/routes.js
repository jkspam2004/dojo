console.log("server routes");
/* require controller file */
var appts = require('../controllers/appointments.js');

module.exports = function(app) {
  /* CRUD routes for appointments, only needed ones */
  app.get('/appointments', appts.index);
  app.get('/appointments/:name', appts.show);
  app.post('/appointments', appts.create);

}
