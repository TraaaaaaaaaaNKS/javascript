function divida(receita, gastos){
    if(receita > gastos) {
        return "Não está endividado!"
    } else {
        return "Está endividado!"
    }
}

const maria = divida(5000, 7000)
const joao = divida(10000, 8000)

console.log(maria)
console.log(joao)


/* Arrow Function (Função flecha) */

function abacate(){} //Forma clássica de função

const digaMeuNome = () => {
    console.log("Diogo")
}

DigaMeuNome2()