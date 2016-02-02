var http = require('http');

var PORT= process.env.PORT || 3000;

function handleRequest(request, response){
    var start = new Date().getTime();
  while (new Date().getTime() - start < 10000);
    
    response.end('Hello World!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})
