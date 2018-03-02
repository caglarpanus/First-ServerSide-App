var http = require("http");

const PORT1 = 7000;

const PORT2= 7500;

const server1 = http.createServer(function(request,response){
    response.end("You look great today: " + request.url);
});

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});

const server2 = http.createServer(function(request,response){
    response.end("What a horrible today is!!!" + request.url);
});

server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
});

