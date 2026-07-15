let nome_produto = document.getElementById("produto")
let preco = document.getElementById("preco")
let btn_cadastrar = document.getElementById("btn_cadastrar")
let lista = document.getElementById("lista")


let a_produto = []

class Produto {
    constructor(preco, nome){
        this.nome = nome,
        this.preco = preco
    }
    
    Disponibilidade(){
        let disponivel = true
        if(disponivel == true){
        disponivel = "Disponível"
        } else {
            disponivel = "Indisponível"
        }
    }
}

btn_cadastrar.addEventListener("click", ()=>{
    if(nome_produto.value == ""|| preco.value == ""){
        alert("Preencha os campos!")
    } else {
        lista.innerHTML = ""
        let novo_produto = new Produto(preco.value, nome_produto.value)
        a_produto.push(novo_produto)
        a_produto.forEach((el)=>{
            let div = document.createElement("div")
            div.setAttribute("class", "info")
            lista.appendChild(div)

            let botao = document.createElement("button")
            botao.setAttribute("id", "btn_disponibilidade")
            botao.setAttribute("value", "Disponível")
            div.appendChild(botao)

            div.innerHTML = `Produto: ${el.nome} <br> Preço: R$ ${el.preco}<br> Status: Disponível`
        })
    }
})