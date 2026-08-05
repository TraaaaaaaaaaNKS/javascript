const endPoint = 'http://127.0.0.1:5500/Aulas_CFBcursos/Aula89/'
fetch(endPoint)
.then(res=>res.text())
.then(dados=>{
    console.log(dados)
})

// let http = require('http');
// http.createServer(function(req, res){
//     res.setHeader('Acess-Control-Allow-Origin', '*');

//     let num = {
//         valor: Math.round(Math.random() * 10)
//     }

//     res.end(JSON.stringify(num));
// }).listen(8080)