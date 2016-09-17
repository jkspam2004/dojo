/* require controllers file */
var fiftyfives = require('../controllers/fiftyfives.js');

module.exports = function(app) {
  // show full collection of people born in 1955
  app.get('/', function(req, res) {
    fiftyfives.index(req, res);  
  });

  // add a name to db
  app.get('/new/:name', function(req, res) {
    fiftyfives.create(req, res);
  });

  // delete a name from db
  app.get('/remove/:name', function(req, res) {
    fiftyfives.destroy(req, res);
  });

  // show a particular person. 
  // this route needs to last since it can capture any string after first slash
  app.get('/:name', function(req, res) {
    fiftyfives.show(req, res);
  });


}
