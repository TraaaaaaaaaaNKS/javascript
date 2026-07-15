const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
let tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

let som_alarme = new Audio("alarme.mp3")
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false


tmp_alarme.addEventListener("focus", () => {
    if (tmp_alarme.value === "0") {
        tmp_alarme.value = ""
    }
})

btn_ativar.addEventListener("click", ()=>{
    if(tmp_alarme.value == 0 || tmp_alarme.value === ""){
        alert("Digite um valor válido")
    }else{
        ts_atual = Date.now()
        ts_alarme = ts_atual+(tmp_alarme.value*1000)
        alarme_ativado = true
        const dt_alarme = new Date(ts_alarme)// data futura que eu quero o alarme tocando
        hora_alarme.innerHTML = `Hora do alarme ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
}
})

btn_parar.addEventListener("click", ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0;
    tmp_alarme.value = ""
})

const f_relogio = () => {
    const data = new Date()
    const hora = data.toLocaleTimeString()
    const data_ano = data.toLocaleDateString()
    div_relogio.innerHTML = hora
    div_data.innerHTML = data_ano
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme") 
        }
    }
    
}


const intervalo = setInterval(f_relogio, 1000)


