var http = require('http');

const PORT=8080; 

setTimeout(handleRequest(), 10000);

function handleRequest(request, response){
    response.end('Hello World!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
});

