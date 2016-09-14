var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/static'));
console.log(__dirname);

app.use(bodyParser.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('index');
});

app.post('/result', function(request, response) {
  console.log("form data\n\n", request.body);

  userdata = request.body;
  response.render('result', { user: userdata });
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
