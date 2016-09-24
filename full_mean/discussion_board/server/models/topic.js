console.log("server topic model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  topic: { 
    type: String, 
    required: [true, "Topic is required"], 
    minlength: [4, "Topic must be at least 4 characters"] 
  },
  description: { 
    type: String, 
    required: [true, "Description is required"],
    minlength: [4, "Description must be at least 4 characters"] 
  },
  category: { 
    type: String, 
    required: [true, "Category is required"],
    minlength: [4, "Category must be at least 4 characters"] 
  },
  _poster: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  posts: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true });
mongoose.model('Topic', newSchema); // set our schema to model name
