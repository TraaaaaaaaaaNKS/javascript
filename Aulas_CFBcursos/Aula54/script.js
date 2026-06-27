const caixa = document.querySelector("#caixa")
let cursos = new Map()

cursos.set(1, "HTML")
cursos.set(2, "Java")
cursos.set(3, "PHP")

cursos.delete(1)

console.log(cursos)

let pes = 3                   
let res = ""                      
if(cursos.has(pes)) {                       // Ao passar a variável "pes", estou passando o valor numérico 3 = chave 3 e o cursos.has está buscando dentro da coleção o valor "PHP".
    caixa.innerHTML = `A chave existe na coleção com o valor: ${cursos.get(pes)}`
} else {
    caixa.innerHTML = "Não existe na coleção"
}

res += `<br> O Tamanho da coleção é ${cursos.size}`
cursos.innerHTML = res

cursos.forEach((el) => {
    console.log(el)
})