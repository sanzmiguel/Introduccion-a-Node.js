var fs = require('fs');

exports.readFile = function(fileName, callback){
    fs.readFile(fileName, 'utf8', function(error, data){
        if (error) callback(new Error(error));
        callback(null, data);
    });
}

exports.readFilePromise = function(fileName){
    return new Promise(function(fulfill, reject){
        fs.readFile(fileName, 'utf8', function(error, data){
            if (error) return reject(new Error(error));
            return fulfill(data);
        });
    });
}