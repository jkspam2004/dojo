var fs = require('fs');

module.exports = function() {
  return {
    process: function(request, response) { // process function to determine filename and type
      console.log("request url:", request.url);

      var content_type = 'text/html';
      var encoding = 'utf8';
      var filename = undefined;
      if (request.url === '/') {
        filename = './views/index.html';
      }
      else if (match = /^\/\w+$/.exec(request.url)) {      // matches url=/cats
        console.log(match);
        filename = "./views" + match[0] + '/index.html';   // filename=./views/cats/index.html
      }
      else if (match = /^\/\w+\/\w+$/.exec(request.url)) { // matches url=/cars/new
        console.log(match);
        filename = "./views" + match[0] + '.html';         // filename=./views/cars/new.html
      }
      else if (match = /^\/views\/\w+.html$/.exec(request.url)) { // url=/views/index.html
        console.log(match);
        filename = "." + match[0];
      }
      else if (match = /^\/views\/\w+\/\w+.html$/.exec(request.url)) { // url=/views/cars/index.html
        console.log(match);
        filename = "." + match[0];
      }
      else if (match = /^\/stylesheets\/\w+\.css$/.exec(request.url)) { // stylesheets
        filename = "." + match[0];
        content_type = 'text/css';
      }
      else if (match = /^\/images\/\w+\.(jpg|jpeg|png|gif)$/.exec(request.url)) { // images
        console.log(match);
        filename = "." + match[0];
        content_type = 'img/' + match[1];
        encoding = undefined;
      }
      else if (match = /^\/javascript\/\S+\.js$/.exec(request.url)) { // javascript files
        console.log(match);
        filename = "." + match[0];
        content_type = 'text/javascript';
      }

      if (filename) {
        console.log("filename:", filename);
        fs.readFile(filename, encoding, function(errors, contents) { // read the file asynchronously
          if (errors){
            console.log("errors:", errors);
            console.log(errors.code);
            if (errors.code === 'ENOENT') { // display file not found in the browser if bad route/filename
              response.writeHead(404);
              response.end('File not found!!!');
            }
            else { // throw error if not a file not found error code
              throw errors;
            }
          }
          else { // write out the contents if successful file read
            response.writeHead(200, {'Content-type': content_type });
            console.log("content-type:", content_type);
            response.write(contents);
            response.end();
          }
        });
      }
      else { // invalid request url
        response.writeHead(404);
        response.end('File not found!!!');
      }
    }
  }
}
