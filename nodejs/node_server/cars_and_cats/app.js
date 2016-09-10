/* Cars and Cats 
   node assignment to create basic web server
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log("client request url:", request.url);
  var content_type = 'text/html';
  var encoding = 'utf8';

  var filename = undefined;
  switch(request.url) {
    case '/':
      filename = './views/index.html';
    break;
    case '/cars':
      filename = './views/cars/index.html'; 
    break;
    case '/cats':
      filename = './views/cats/index.html'; 
    break;
    case '/cars/new':
      filename = './views/cars/new.html'; 
    break;
    case '/stylesheets/style.css': 
      filename = './stylesheets/style.css'; 
      content_type = 'text/css';
    break;
    case '/images/cats_1.jpg': 
      filename = './images/cats_1.jpg'; 
      content_type = 'image/jpg*';
      encoding = undefined;
    break;
    case '/images/cars_1.jpg': 
      filename = './images/cars_1.jpg'; 
      content_type = 'image/jpg';
      encoding = undefined;
    break;
    case '/javascript/foo.js':
      filename = './javascript/foo.js';
      content_type = 'text/javascript';
    break;
    default: 
      filename = undefined;
    break;
  }

  if (filename) {
    fs.readFile(filename, encoding, function(errors, contents) {
      response.writeHead(200, {'Content-type': content_type });
      console.log("filename:", filename);
      console.log("content-type:", content_type);
      console.log("errors:", errors);
      response.write(contents);
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});

server.listen(7077);
console.log("Running in localhost at port 7077");
