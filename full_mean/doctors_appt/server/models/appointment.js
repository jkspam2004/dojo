console.log("server appointment model");

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Schema variable used to understand Schema.Types.ObjectId in associations 
var newSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"], 
    minlength: [3, "Name must be at least 3 characters"] 
  },
  appt_date: { 
    type: Date, 
  },
  appt_time: { 
    type: Date, 
  },
  complaint: { 
    type: String, 
    required: [true, "Complaint is required"], 
    minlength: [10, "Complaint must be at least 10 characters"] 
  },
}, { timestamps: true });
mongoose.model('Appointments', newSchema); // set our schema to model name
