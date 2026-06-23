let caixa = document.querySelector(".caixa")
let cores = ["Azul", "Bege", "Verde"]
let cursos = ["HTML", "CSS", "JavaScript", cores]
// cursos [0] = 'C++'


cursos.push("C++", "PHP")

//Tira um elemento do array
// cursos.pop()

console.log(cursos[3][2])

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})