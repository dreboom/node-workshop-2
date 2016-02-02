var http = require('http');

var PORT= process.env.PORT || 3000;

function handleRequest(request, response){
    setTimeout(function() {
    response.end('Hello World!');    
    }, 10000);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})

