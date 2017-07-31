var http = require('http');
var uc = require('upper-case'); //text changes to upper case
http.createServer(function (req, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(uc("Hello World!"));
}).listen(8081);
console.log("awesome");