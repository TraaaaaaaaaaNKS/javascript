const d = document.getElementById("d")
const relogio = document.getElementById("relogio")



// console.log(Date.now()) // Timesstamp



const f_relogio = () => {
    const data = new Date()
    const hora = data.toLocaleTimeString()
    const data_agora = data.toLocaleDateString()
    relogio.innerHTML = hora
    d.innerHTML = data_agora
}

const intervalo = setInterval(f_relogio, 1000)

