const relogio = document.querySelector("#relogio")
const btn_parar = document.querySelector("#btn_parar")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_zerar = document.querySelector("#btn_zerar")
let tmpinicial = null
let intervalo = null

const contador = ()=>{
    const tmpatual = Date.now()
    let contagem = tmpatual-tmpinicial
    let seg = (tmpatual-tmpinicial) / 1000
    relogio.innerHTML = converter(seg)
}

const converter = (seg)=>{
    const hora = Math.floor(seg/3600)
    const resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const form = (hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)

    return form
}


btn_iniciar.addEventListener("click", ()=>{
    tmpinicial = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener("click", ()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click", ()=>{
    tmpinicial = Date.now()
    relogio.innerHTML = "00:00:00"
    clearInterval(intervalo)
})
