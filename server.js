var http = require('http');

const PORT=8080; 

function handleRequest(request, response){
    response.end('Hello World!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
});

