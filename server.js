var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Hola mundo');
    response.end();
}).listen(8000);

console.log('Servidor escuchando en el puerto 8000');