const array = document.querySelector("div#array")
const btn_pesquisar = document.querySelector("button#btn_pesquisar")
const resultado = document.querySelector("div#resultado")

const elementos_array = [21,42,18,20,26,18,22]
array.innerHTML = `${elementos_array}`

btn_pesquisar.addEventListener("click", (evt) => {
    const ret = elementos_array.every((el, i) => {
        if(el < 18){
            resultado.innerHTML = "Não conforme " + "na posição do " + i
        }
        return el >= 18
    })
    if(ret) {
        resultado.innerHTML = "OK!"
    }
})