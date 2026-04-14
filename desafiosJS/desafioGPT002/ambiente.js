let numerosadd = []
let res = document.querySelector("div#res")
let resultado = document.querySelector("div#resultados")
let soma = document.createElement("p")

function adicionar() {
    let valor = document.querySelector("input#numero").value
    let numeroadd = Number(valor)


    if (numeroadd < 1 || numeroadd > 100) {
        alert("Número incorreto!")
    } else if(numerosadd.indexOf(numeroadd) == -1) {
        numerosadd.push(numeroadd)
    } else {
        alert("Número repetido")
    }
}

function finalizar() {
    // Quantidade de números na tela // nesse criei uma div no HTML, mas nos próximo irei criar os elementos pelo JS
    let QntNum = numerosadd.length
    res.innerHTML = `Sua lista possui ${QntNum} números`

}

function limpar() { 
    numerosadd = []
    resultado.innerHTML = ""
    res.innerHTML = ""
}

