var mongoose = require('mongoose');
var fiftyFiveSchema = new mongoose.Schema({
  name: String
});

mongoose.model('FiftyFive', fiftyFiveSchema);
