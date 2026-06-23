let caixa = document.querySelector("div#cursos")
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
let nome = document.getElementById("nome")
let botao_adicionarA = document.querySelector("button#adicionarA")
let botao_adicionarD = document.querySelector("button#adicionarD")
let botao_remover = document.querySelector("button#remover")
let botao_selecionar = document.querySelector("button#selecionar")
let indice = 0

const criarNovoCurso = (cursos) => {
    let novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "cursoc1")
    novoElemento.innerHTML = cursos

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    
    return novoElemento
}
cursos.map((el) => {
    const novoElemento = criarNovoCurso(el)
    caixa.appendChild(novoElemento)
    indice++
})

const radioSelecionado = () => {
    const todosRadio = [...document.querySelectorAll("input[type=radio]")]
    let Radioselecionado = todosRadio.filter((elemento) => {
    return elemento.checked
    })
    return Radioselecionado[0]
}

botao_selecionar.addEventListener("click",(evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado " + cursoSelecionado)
    }catch(execao){
        alert("Selecione um curso")
    }

})

botao_remover.addEventListener("click",(evt) => {
    const rs = radioSelecionado()
    if(rs != undefined) {
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    } else {
        alert("Selecione o curso")
    }
    
})

botao_adicionarA.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        if(nome.value != "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nome.value)
        caixa.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert("Digite o nome do curso!")
        }
    } catch(execao) {
        alert("Selecione o curso")
    }
})

botao_adicionarD.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        if(nome.value != "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nome.value)
        const proximo = rs.parentNode.parentNode.nextSibling
        caixa.insertBefore(novoCurso, proximo)
    } else {
        alert("Digite o nome do curso")
    }
    } catch(execao) {
        alert("Selecione o curso")
    }
})


