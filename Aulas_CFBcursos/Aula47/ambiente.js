const array = document.querySelector("div#array")
const numero = document.querySelector("input#texto")
const btn_pesquisar = document.querySelector("button#btn_pesquisar")
const resultado = document.querySelector("div#resultado")

const elementos_array = ["HTML", "CSS", "JavaScript"]
array.innerHTML = `[${elementos_array}]`

btn_pesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"
    const ret = elementos_array.find((el, i) => {
        if(el.toUpperCase() == numero.value.toUpperCase()) {
            resultado.innerHTML = `Valor encontrado ${el}, está na posição ${i}.`
            return true
        }
    })
    console.log(ret)
})

