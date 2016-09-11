var http = require('http');
var static_contents = require('./static.js')();
console.log("static_content:", static_contents);

server = http.createServer(function(request, response) {
  static_contents.process(request, response); // this will serve all static files automatically
});

server.listen(8000);
console.log("Running in localhost at port 8000");
