fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId: 156,
        id:999,
        title: "FLAMENGO"
    }),
})
.then(res => res.json())
.then(dados => console.log(dados))
.catch(erro => console.log("ERRO!"))