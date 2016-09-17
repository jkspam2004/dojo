var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

var host = 'localhost';
mongoose.connect('mongodb://' + host + '/courses_dashboard');

// read all of the files in the models_path and require each of the javascript files
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
