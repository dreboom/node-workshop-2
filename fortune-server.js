var fortune = require("./library/fortune.js");

var http = require('http');

var PORT= process.env.PORT || 3000;

function handleRequest(request, response){
    response.end(fortune());
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})

