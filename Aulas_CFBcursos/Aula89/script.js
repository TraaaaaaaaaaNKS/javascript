fetch("http://localhost:8080/")
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})