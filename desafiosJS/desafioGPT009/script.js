let nome_aluno = document.querySelector("#nome")
let n1 = document.querySelector("#nota1")
let n2 = document.querySelector("#nota2")
let btn_cadastrar = document.querySelector("#btn_cadastrar")
let area = document.querySelector("#area")

class Aluno{
    constructor(nome, n1, n2){
        this.nome = nome
        this.n1 = Number(n1)
        this.n2 = Number(n2)

    }
    media = function(){
        let res =(this.n1+this.n2)/2
        return res
    }
    res = function(){
        if(this.media() >= 6){
            return "Aprovado"
        } else 
            return "Reprovado"
    }
}

let a_alunos = []

btn_cadastrar.addEventListener("click", (evt)=>{
    if(n1.value == "" || n2.value == "" || nome_aluno.value == ""){
        alert("Preencha os campos corretamente!")
    } else if(n1.value > 10 || n1.value < 0 || n2.value > 10 || n2.value < 0  ){
        alert("Nota inválida.")
    } else{
        area.innerHTML = ""
        let novo_aluno = new Aluno(nome_aluno.value, n1.value, n2.value)
        a_alunos.push(novo_aluno)
        a_alunos.forEach((a)=>{
            let div = document.createElement("div")
            div.setAttribute("class", "aluno")
            area.appendChild(div)
            div.innerHTML = `Nome do Aluno: ${a.nome}<br> AV1: ${a.n1} <br> AV2: ${a.n2}<br> Média: ${a.media()}<br> ${a.res()} `  
        })
        n1.value = ""
        n2.value = ""
        nome_aluno.value = ""
    }
}
)
