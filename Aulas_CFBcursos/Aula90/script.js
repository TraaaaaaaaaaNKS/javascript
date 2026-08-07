const p_temperatura = document.getElementById("p_temperatura")
const p_nivel = document.getElementById("p_nivel")
const p_pressao = document.getElementById("p_pressao")
const btn_texto = document.getElementById("btn_texto")

const obterDados = ()=>{
    fetch("http://localhost:8080/", {method: "get"})
        .then(res=>res.json()) // Se a resposta for dada com sucesso, executa o primeiro .then
        .then(dados=>{
            p_temperatura.innerHTML = "Temperatura: "+ dados.temperatura
            p_pressao.innerHTML = "Pressão: " + dados.pressao
            p_nivel.innerHTML = "Nível: " + dados.nivel
})
}


// let intervalo = setInterval(obterDados, 3000)

let dados = {
    nome: "Diogo",
    profissao: "dev",
    curso: "JavaScript",
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados = ()=>{
    const endpoint = "http://localhost:8080"
    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click", ()=>{
    gravarDados()
})