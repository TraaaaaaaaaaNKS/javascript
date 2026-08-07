let http = require('http');
 http.createServer(function(req, res){
     res.setHeader('Access-Control-Allow-Origin', '*');
     let num = {
         temperatura: Math.round(Math.random() * 10),
         pressao: Math.round(Math.random() * 10),
         nivel: Math.round(Math.random() * 10)
    }

     res.end(JSON.stringify(num));
}).listen(8080)