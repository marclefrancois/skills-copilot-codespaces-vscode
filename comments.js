// Create web server 
// 1. Load the http module
const http = require('http');

// 2. Create a server object
const server = http.createServer((req, res) => {
  // 3. Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 4. Send the response body "Hello World"
  res.end('Hello World\n');
});

// 5. The server object will listen on port 8080
server.listen(8080);