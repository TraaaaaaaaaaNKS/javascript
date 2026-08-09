const texto = document.querySelector("#texto")

const endpoint = "texto.txt"

fetch(endpoint)
.then(res=>{
    return res.text()})
.then(texto =>{
    texto = JSON.parse(texto);
    console.log(texto.canal);
    console.log(texto.curso)
})
.catch((erro)=>console.log("ERRO"))

// fetch("https://jsonplaceholder.typicode.com/posts/100")
// .then(
//     (resposta)=> {
//         if(resposta.ok){
//             console.log(resposta)
//             return resposta.json()
//         } else {
//             console.log("Deu erro!")
//         }
//     }
// )

// .then((json)=> console.log(json))
// .catch((erro)=> console.log("ERRO"))