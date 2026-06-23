let caixa = document.querySelector("div#cursos")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
let nome = document.getElementById("nome")
let botao_adicionarA = document.querySelector("button#adicionarA")
let botao_adicionarD = document.querySelector("button#adicionarD")
let botao_remover = document.querySelector("button#remover")
let botao_selecionar = document.querySelector("button#selecionar")
let indice = 0

const tirarSelecao = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el) => {
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (cursos) => {
    let novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "cursoc1")
    novoElemento.innerHTML = cursos
    novoElemento.addEventListener("click", (evt) => {
    tirarSelecao()
    evt.target.classList.toggle("selecionado")
    })
    return novoElemento

    // const comandos = document.createElement("div")
    // comandos.setAttribute("class", "comandos")

    // const rb = document.createElement("input")
    // rb.setAttribute("type", "radio")
    // rb.setAttribute("name", "rb_curso")

    // comandos.appendChild(rb)

    // novoElemento.appendChild(comandos)

}
cursos.map((el) => {
    const novoElemento = criarNovoCurso(el)
    caixa.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursoSelecionados[0]
}

botao_selecionar.addEventListener("click",(evt) => {
    try {
        alert("Curso selecionado " + cursoSelecionado().innerHTML)
    }catch(execao){
        alert("Selecione um curso")
    }

})

botao_remover.addEventListener("click",(evt) => {
    if(cursoSelecionado() != undefined) {
    cursoSelecionado().remove()
    } else {
        alert("Selecione o curso")
    }
    
})

botao_adicionarA.addEventListener("click", (evt) => {
    try {
        if(nome.value != "") {
        const novoCurso = criarNovoCurso(nome.value)
        caixa.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("Digite o nome do curso!")
        }
    } catch(execao) {
        alert("Selecione o curso")
    }
})

botao_adicionarD.addEventListener("click", (evt) => {
    try {
        if(nome.value != "") {
        const novoCurso = criarNovoCurso(nome.value)
        caixa.insertBefore(novoCurso, cursoSelecionado().nextElementSibling)
        } else {
        alert("Digite o nome do curso")
        }
    } catch(execao) {
        alert("Selecione o curso")
    }
})


