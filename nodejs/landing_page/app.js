//landing page

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end(); 
    });
  } else if (request.url === '/ninjas') {
    console.log("here");
    fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    
    });
  } else if (request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    
    });
  } else if (request.url = /jquery/) {
    fs.readFile('/Users/eto/jquery_pkgs/bower_components/dist/jquery.min.js', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'text/javascript'});
      response.write(contents);
      response.end();

    });
  } else {
    response.writeHead(404);
    response.end("File not found!!!");    
  }

});

server.listen(6789);
console.log("Running in localhost at port 6789");
