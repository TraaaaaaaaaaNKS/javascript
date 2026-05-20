function* perguntas(){
    const nome = yield "Qual é seu nome?"
    const esporte = yield "Qual seu esporte favorito?"
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}.`
}

let itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Bruno").value)
console.log(itp.next("Natação").value)