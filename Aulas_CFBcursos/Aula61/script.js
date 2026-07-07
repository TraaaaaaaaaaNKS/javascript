let fnome = document.querySelector("input#f_nome")
let fidade = document.querySelector("input#f_idade")
let btn = document.querySelector("button#btn_add")
let res = document.querySelector(".res")

const Pessoa = {
    nome: "",
    idade: "",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    }, 
    setNome:function(){
        return this.nome = nome
    },
    setIdade:function(){
        this.idade = idade
    },
}


btn.addEventListener("click", ()=>{
    const nomeP = fnome.value                  // Variavel que pega o valor do(input)
    const idadeP = fidade.value                // Variavel que pega o valor do(input)
    Pessoa.nome = nomeP                    // Variável que adiciona o valor do input a propriedade nome do objeto
    Pessoa.idade = idadeP                  // Variável que adiciona o valor do input a propriedade idade do objeto
    const div = document.createElement("div")
    res.appendChild(div)
    div.innerHTML = `${Pessoa.getNome()} <br> ${Pessoa.getIdade()}`
})









 
















/* const pessoa = {
     nome: "Diogo",
     getNome: function (){
         return this.nome
     },

     setNome: function(nome) {
         return this.nome = nome
     }, 
 }
const p2 = pessoa
const p3 = pessoa
p3.nome = "Vandilma"     //  Uma forma de chamar uma propriedade de um objeto literal
p2["nome"] = "Flamengo" // Outra forma de chamar uma propriedade de um objeto literal
pessoa.setNome("EU") // Outra forma de atualizar os valores de alguma propriedade de um objeto literal

console.log(pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome) */