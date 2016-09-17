var mongoose = require('mongoose');
var courseSchema = new mongoose.Schema({
  name: String,
  description: String
});
// register the schema as a model
mongoose.model('Course', courseSchema); 
