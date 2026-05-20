const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
console.log(val)


// let elemento = document.getElementsByTagName("div")
// elemento = [...elemento]
// elemento.map((e, i) => {
//     elemento.innerHTML = "Diogo"
// })

// const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"]
// let c = cursos.map((elemento, posicao) => {
//     return elemento
// })

// console.log(c)

// let nomes = ["Diogo", "Dioguinho"];
// let maiusculas = nomes.map(nome => nome.toUpperCase());
// console.log(maiusculas)