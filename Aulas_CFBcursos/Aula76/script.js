const objetos = document.querySelector("#objetos")

let computador = {
    cpu:"Ryzen 5 5500X3D",
    ram:"16GB",
    gpu:"RX 7600",
    ssd:"1TB"
}
 

let computadores = [
    {
        cpu:"Ryzen 5 5500X3D",
        ram:"16GB",
        gpu:"RX 7600",
        ssd:"1TB"
    },
    {
        cpu:"Ryzen 7 5700X3D",
        ram:"32GB",
        gpu:"RX 9600",
        ssd:"1TB"
    },
    {
        cpu:"Ryzen 5 5500",
        ram:"16GB",
        gpu:"RTX 3060",
        ssd:"725GB"
    },
    {
        cpu:"i5 12200k",
        ram:"32GB",
        gpu:"RTX 4060",
        ssd:"1.5TB"
    }
]



computadores.forEach((c)=>{
    computadores[0].gabinete = "HAYOM"
    computadores[1].gabinete = "MANCER"
    computadores[2].gabinete = "Red Dragon"
    computadores[3].gabinete = "Corsair"
    const div=document.createElement("div")
    div.innerHTML =`Processador: ${c.cpu} <br> Placa de vídeo: ${c.gpu}<br> Memória RAM: ${c.ram}<br> Armazenamento: ${c.ssd} <br> Gabinete: ${c.gabinete} `
    div.setAttribute("class", "computadores")
    objetos.appendChild(div)
})

// objetos.innerHTML = `Processador: ${computadores[1].cpu} <br> Placa de vídeo: ${computadores[1].gpu}<br> Memória RAM: ${computadores[1].ram}<br> Armazenamento: ${computadores[1].ssd} `