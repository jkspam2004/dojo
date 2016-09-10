/* create basic web server with FS and HTTP modules */


// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // regular expression
    // use .test to return boolean
    else if (match = /\/stylesheets\/(\w+\.css)/.exec(request.url)){
        console.log(match);
        fs.readFile("./" + match[0], 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/css'});
          console.log("errors: ", errors);
          //console.log(contents);
          response.write(contents);
          response.end();
        });
    }
    else if (request.url === '/javascript/foo.js') {
        fs.readFile('./javascript/foo.js', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/javascript'});
          console.log("errors: ", errors);
          //console.log(contents);
          response.write(contents);
          response.end();
        });
    }
    else if (request.url === '/image/foo.png') {
        fs.readFile('./images/foo.png', function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/*'});
          console.log("errors: ", errors);
          //console.log(contents);
          response.write(contents);
          response.end();
        });
    }
    else if (request.url === '/dojo.html') {
      fs.readFile('dojo.html', 'utf8', function(errors, contents) {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

/* fs module
An essential part of any server is the ability to read and write files.  Reading a file is 
how we obtain the content to serve to clients, and writing it is how we output content to 
the client.  If we don't have a way of doing this, we're not going to be able to build a 
server!   That is why the creators of Node.js built the fs (file system) module.  The FS 
module allows us to do exactly what we need: read and write content from files, and it is 
by default included in Node.js.  It is very rare you'll see the fs module used without the 
http module.  The http module is the module that allows us to build a web server that 
accepts HTTP requests and can serve responses. Combining the fs and http modules, we can 
create simple web servers quite easily.
*/

/*
The code above captures ONE REQUEST and serves ONE RESPONSE.  Notice the code begins with 
an if statement.  We are asking if the URL property of the request object is equal to "/".  
The route "/" is always considered the root route.  In English, we are asking if the URL 
requested by the client is a particular form.  If the request URL matches the string to the 
right of the triple equals sign, we will serve the appropriate response.  That response 
begins at fs.readFile(...).  This command goes and finds a file by name and reads it.  The 
name of the file we're opening is called 'index.html'.  The second parameter is the encoding
of the file.  Here, we're telling the fs object what type of characters to expect in the 
file it's opening. You will need to include this line for any text-based document you serve,
remember this!!

When the fs module reads the file, it passes the contents of the file into a callback and 
this is where we actually formulate and serve the response.  Notice the first thing we do 
is call the response.writeHead() method.  This method sends the headers for our response i
along with a status code.  A header is the part of a response that contains the specifics 
of the response. We need to tell the browser what type of response we're serving.  The 
status code is a code that tells the browser the status of the response.  Any status code 
in the 200's or 300's is good.  Anything in the 400's to the 500's is bad.  For now, just 
always put a 200 as your status code on any valid request.

After all of that, we finally send the response to the client using the response.write() 
method, which just sends the contents of the files to the client.  Since a response might 
contain multiple chunks of data, we call response.end() when we are finished. And there 
you have it!  A complete request and response cycle hand-written in Node.js! Awesome, right?
This is a lot of code for something we haven't really had to do for ourselves up to this 
point, but if you want to be a true full-stack engineer, you have to know how this stuff is 
constructed under the hood.
*/
