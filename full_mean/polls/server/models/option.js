console.log("server option model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  option: { 
    type: String, 
    required: [true, "Option is required"], 
    minlength: [3, "Option must be at least 3 characters"] 
  },
  _question: { // refers to the question this option belongs to
    type: Schema.Types.ObjectId, 
    ref: 'Question'
  },
  votes: [{ // list of userids who voted for the option
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
}, { timestamps: true });
mongoose.model('Option', newSchema); // set our schema to model name
