console.log("server post model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  message: { 
    type: String, 
    required: [true, "Message is required"], 
    minlength: [4, "Message must be at least 4 characters"] 
  },
  _poster: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  _topic: { 
    type: Schema.Types.ObjectId, 
    ref: 'Topic'
  },
  likes: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislikes: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],

}, { timestamps: true });
mongoose.model('Post', newSchema); // set our schema to model name
