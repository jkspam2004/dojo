console.log("server question model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: [true, "Question is required"], 
    minlength: [8, "Question must be at least 8 characters"] 
  },
  _poster: { // who posted the question
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  options: [{ // question can have many options 
    type: Schema.Types.ObjectId,
    ref: 'Option'
  }]
}, { timestamps: true });
mongoose.model('Question', newSchema); // set our schema to model name
