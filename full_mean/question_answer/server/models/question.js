console.log("server question model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: [true, "Question is required"], 
    minlength: [10, "Question must be at least 10 characters"] 
  },
  description: { // optional 
    type: String, 
  },
  _poster: { // who posted the question
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  answers: [{ // question can have many answers 
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }]
}, { timestamps: true });
mongoose.model('Question', newSchema); // set our schema to model name
