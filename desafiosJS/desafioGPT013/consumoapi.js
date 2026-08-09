function buscarPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(resposta => resposta.json())
        .then(dados => console.log(dados))
}

let novoPost = {
    userId: "Flamengo",
    id: 101,
    title: "Brasileiro e libertadores"
}

function criarPosts(novoPost){
    fetch("https://jsonplaceholder.typicode.com/posts/",{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(novoPost)
    })
    .then(res => res.json())
    .then(dados => dados)
}

buscarPosts()
criarPosts(console.log(novoPost.userId))




// Adicionando dados a uma API

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers:{ 
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         userId: "Flamengo",
//         id: 101,
//         title: "Maior do brasil",
//         body: "opa"
//     }),
// })

// .then(res => res.json())
// .then(time => console.log(time))



// Buscando os dados da API 

// fetch("https://jsonplaceholder.typicode.com/posts/2")
// .then(res => res.json())
// .then(dados => console.log(dados))