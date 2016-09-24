console.log("server answer model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  answer: { 
    type: String, 
    required: [true, "Message is required"], 
    minlength: [4, "Message must be at least 4 characters"] 
  },
  _poster: { // who posted the answer
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  _question: { // refers to the question this answer is addressing 
    type: Schema.Types.ObjectId, 
    ref: 'Question'
  },
  detail: { // optional supporting detail
    type: String
  },
  likes: [{ // list of userids who likes the answer 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
}, { timestamps: true });
mongoose.model('Answer', newSchema); // set our schema to model name
