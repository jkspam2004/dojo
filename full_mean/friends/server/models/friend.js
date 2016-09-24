console.log("server friend model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var friendSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: [true, "First name is required"], 
    minlength: [4, "First name must be at least 4 characters"] 
  },
  last_name: { 
    type: String, 
    required: [true, "Last name is required"],
    minlength: [4, "Last name must be at least 4 characters"] 
  },
  birthday: { 
    type: Date, 
    required: false
  }
}, { timestamps: true });
mongoose.model('Friend', friendSchema); // set our schema to model name
