var http = require('http');
var url = require('url');

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    
    var params = url.parse(request.url, true).query; 
    var input = params['number'];
    var output = (Math.random() * parseInt(input)).toFixed(0);

    response.write(output);
    response.end();
}).listen(8000);

console.log('Servidor escuchando en el puerto 8000');