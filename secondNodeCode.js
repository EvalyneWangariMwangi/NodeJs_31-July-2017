var http = require('http');

http.createServer(function (req, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}).listen(8081);
console.log("awesome");