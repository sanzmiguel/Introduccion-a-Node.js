var express = require('express');
var app = express();
var fileReader = require('./fileReader');

app.get('/', function(req, res){
    res.send('Hola mundo');
});

app.get('/read', function(req, res){
    fileReader.readFile('package.jso', function(error, result){
        if (error) {
            res.status(400).send('Ha habido error');
        }
        else{
            res.send(result);
        }
    });
});

app.listen(8000, function(){
    console.log('Servidor escuchando en el puerto 8000');
});