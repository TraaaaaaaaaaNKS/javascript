let num_objetos = document.getElementById("num_objetos")
let qtd_objetos = document.getElementById("qtd")
let btn_adicionar = document.getElementById("btn_add")
let btn_remover = document.getElementById("btn_remover")
let palco = document.getElementById("palco")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tamanho = Math.floor(Math.random()*10) + 10
        this.r = Math.floor(Math.random()*255) 
        this.g = Math.floor(Math.random()*255) 
        this.b = Math.floor(Math.random()*255) 
        this.px = Math.floor(Math.random()*(larguraPalco)-this.tamanho)
        this.py = Math.floor(Math.random()*(alturaPalco)-this.tamanho)
        this.velx = (Math.random()*2)+0.5
        this.vely = (Math.random()*2)+0.5
        this.dirx = (Math.random()*10)>5 ? 1 : -1
        this.diry = (Math.random()*10)>5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola
    }
    minhaPos=()=>{
        return this.arrayBolas.indexOf(this)
    }
    remover= ()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML = numBola
    }
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left:${this.px};top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb${this.r}, ${this.g}, ${this.b};`)
        this.palco.appendChild(div)
    }
    controle_bordas=()=>{
        if(this.px+rthis.tamanho >= larguraPalco){
            this.dirx = -1
        } else if(this.px <= 0){
            this.dirx = 1
        }if(this.py+this.tamanho >= alturaPalco){
            this.diry = -1
        }else if(this.py < 0){
            this.diry = 1
        } 
    }
    controlar = ()=>{
        this.controle_bordas()
        this.px += this.dirx*this.velx
        this.py += this.diry*this.vely
        this.eu.setAttribute("style", `left:${this.px};top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r}, ${this.g}, ${this.b});`)
        if((this.px > larguraPalco) || (this.py > larguraPalco)){
            this.remover()
        }
    }
}

window.addEventListener("resize", (evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_adicionar.addEventListener("click", (evt)=>{
    const qtd = qtd_objetos.value
    for(let i=0; i<qtd; i++){
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener("click", (evt)=>{
    bolas.map((b)=>{
        b.remover()
    })
})