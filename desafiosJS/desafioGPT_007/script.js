let inp_tarefa = document.querySelector("#inp_tarefa")
let btn_add = document.querySelector("#btn_add")
let mostrar_tarefas = document.getElementById("tarefa")


class Tarefas  {
    constructor(nome) {
    this.nome =  nome,
    this.status = "Pendente..."
    }
}

let a_tarefas = []

btn_add.addEventListener("click", (evt) =>{
    if(inp_tarefa.value === ""){
            alert("Erro!")
    } else{

    mostrar_tarefas.innerHTML = ""
    let new_obj = new Tarefas(inp_tarefa.value)
    a_tarefas.push(new_obj)

    a_tarefas.forEach((el)=>{
        let nova_tarefa = document.createElement("div")
        let status = document.createElement("div")
    
        nova_tarefa.setAttribute("class", "nova_tarefa")
        mostrar_tarefas.appendChild(nova_tarefa)
        nova_tarefa.innerHTML = `Tarefa: ${el.nome}`

        status.setAttribute("class", "status")
        mostrar_tarefas.append(status)
        status.innerHTML = `Status: ${el.status}`
    })
    }
})
