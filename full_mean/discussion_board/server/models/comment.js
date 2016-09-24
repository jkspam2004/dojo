console.log("server comment model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  comment: { 
    type: String, 
    required: [true, "Comment is required"], 
    minlength: [10, "Comment must be at least 10 characters"] 
  },
  _poster: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
}, { timestamps: true });
mongoose.model('Comment', newSchema); // set our schema to model name
