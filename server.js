var http = require('http');

var server = http.createServer(function(request, response){
                response.end("Hello world");

});
server.listen(8001);

console.log("running on port 8001");