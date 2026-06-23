const array = document.querySelector("div#array")
const btn_reduzir = document.querySelector("button#btn_reduzir")
const resultado = document.querySelector("div#resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []
array.innerHTML = `${elementos_array}`

btn_reduzir.addEventListener("click", (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
    })
    resultado.innerHTML += " <br/> V.anterior "+ant+" <br/> V.atual "+atu+ "<br/>"+ dobro
})

// O valor anterior seria o acumulador, enquanto o valor atual é os valores do array