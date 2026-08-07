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