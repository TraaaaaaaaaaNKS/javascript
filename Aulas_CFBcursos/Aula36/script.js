const caixa1 = document.querySelector("#caixa1")
const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".cursos")]

caixa1.addEventListener("click", (evento) => {
    console.log("clicou")
})

cursos.map((el) => {
    el.addEventListener("click", (evento) => {
        evento.stopPropagation()
    })
})

