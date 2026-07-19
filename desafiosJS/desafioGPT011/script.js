let titulo = document.querySelector("#titulo")
let autor = document.querySelector("#autor")
let ano_pub = document.querySelector("#ano_pub")
let btn_cadastrar = document.querySelector("#btn_cadastrar")
let area = document.querySelector("#area")
let data = new Date()
let anoatual = data.getFullYear()



class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = Number(ano)
    }

    idadeLivro(){
        return anoatual - this.ano
    }

    categoria(){
        let idade = this.idadeLivro()
        if(idade < 6){
            return "Lancamento"                        
        } else if(idade >= 6 && idade < 20){
            return "Moderno"
        } else {
           return "Clássico" 
        }
    }
}

let a_livros = []

btn_cadastrar.addEventListener("click", (evt)=>{
    if(titulo.value == "" || autor.value == "" || ano_pub.value == ""){
        alert("Preencha os campos corretamente.")
    } else if(ano_pub.value < 0 || ano_pub.value > anoatual){
        alert("Ano de publicação inválido!")
    } else {
        let novo_livro = new Livro(titulo.value, autor.value, ano_pub.value)
        a_livros.push(novo_livro)
        area.innerHTML = ""
        a_livros.forEach((el)=>{
            let div = document.createElement("div")
            let categoria = el.categoria()
            if(categoria === "Moderno"){
                div.classList.add("moderno")
            } else if(categoria === "Lancamento"){
                div.classList.add("lancamento")
            } else {
                div.classList.add("classico")
            }
            area.appendChild(div)
            div.innerHTML = `Título: ${el.titulo} <br> Autor: ${el.autor} <br> Ano de lançamento: ${el.ano} <br> Idade do Livro: ${el.idadeLivro()} anos <br> Categoria: ${el.categoria()}`
        })
    }
    titulo.value = ""
    autor.value = ""
    ano_pub.value = ""
})
