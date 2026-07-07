
let fnome = document.querySelector("input#f_nome")
let fportas = document.querySelector("input#f_portas")
let fblindagem = document.querySelector("input#f_blindagem")
let fmunicao = document.querySelector("input#f_municao")
let carroM  = document.querySelector("input#f_militar")
let carroN = document.querySelector("input#f_normal")
let btn_adicionar = document.querySelector("button#btn_add")
let carros = document.querySelector("div.carros")


class Carro{ // CLASSE PAI
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = "Preto"
    }

    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
}

class Militar extends Carro{ // Classe filho
    constructor(nome, portas, blindagem, municao){
        super(nome, portas) // herda os valores da classe pai 
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }
    
}

let aCarros = []

const removerCarro=(quem)=>{
    aCarros = aCarros.filter((el)=>{
        console.log(el.nome)
        return el.nome!=quem
    })
}

carroM.addEventListener("click", (evt)=>{
    fnome.value = ""
    fportas.value = ""
    fblindagem.removeAttribute("disabled")
    fmunicao.removeAttribute("disabled")
})

carroN.addEventListener("click", (evt)=>{
    fnome.value = ""
    fportas.value = ""
    fblindagem.setAttribute("disabled", "disabled")
    fmunicao.setAttribute("disabled", "disabled")
})

const gerenciarCarros=()=>{
    carros.innerHTML="" 
    aCarros.forEach((c) => {
        const div = document.createElement("div")
        const btn_remover = document.createElement("button")
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome: ${c.nome} <br>
        Portas: ${c.portas} <br> Cor: ${c.cor} <br>
        Blindagem: ${c.blindagem} <br> Munição: ${c.municao}`
        btn_remover.setAttribute("id", "remover")
        btn_remover.innerHTML = "Remover"
        carros.appendChild(div)
        div.appendChild(btn_remover)
        btn_remover.addEventListener("click", (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            console.log(aCarros)
            gerenciarCarros()
        })
    })
}

btn_adicionar.addEventListener("click", ()=>{
    if(carroN.checked){
        const c = new Carro(fnome.value, fportas.value)
        aCarros.push(c)
    } else {
        const c = new Militar(fnome.value, fportas.value, fblindagem.value, fmunicao.value)
        aCarros.push(c)
    }
    gerenciarCarros()
})


