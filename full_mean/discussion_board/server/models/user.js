console.log("server user model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: [true, "Username is required"], 
    minlength: [3, "Username must be at least 3 characters"] 
  },
  topics: { 
    type: Number, 
  },
  posts: { 
    type: Number, 
  },
  comments: { 
    type: Number, 
  }
}, { timestamps: true });
mongoose.model('User', newSchema); // set our schema to model name
