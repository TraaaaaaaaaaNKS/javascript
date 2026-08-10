
class Cxmsg{
    static cor = '#888'
    static destino = null
    static divmsg = null
    static config =(config)=>{
        this.cor = config.cor
    }
    static mostrar=(titulo, texto)=>{
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
        this.divmsg = document.createElement("div")
        const estilo_divmsg = 
        "display: flex;"+
        "justify-content:center;"+
        "align-items: center;"+
        "position: absolute;"+
        "top: 0px;"+
        "left: 0px;"+
        "width: 100%;"+
        "height: 100%;"+
        "background-color: rgba(0, 0, 0, 0.7);"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        // box 

        const area = document.createElement("div")
        const estilo_area = "display:flex;" + 
        "justify-content:flex-start;"+
       "aling-items:center;"+
        "flex-direction:column;"+
        "width:300px;"
       
        area.setAttribute("style", estilo_area)
        this.divmsg.appendChild(area)
        
        //titulo da box
        const t = document.createElement('div');
        t.classList.add("titulo_box")
        t.innerHTML = this.titulo
        area.appendChild(t)

        //Corpo da box
        const corpo = document.createElement("div")
        corpo.classList.add("corpo")
        corpo.innerHTML = this.texto
        area.appendChild(corpo)

        //rodape
        const rodape = document.createElement("div")
        rodape.classList.add("rodape")
        area.appendChild(rodape)

        // botao

        const btn_ok = document.createElement("button")
        btn_ok.classList.add("btn_ok")
        btn_ok.innerHTML = 'OK'
        btn_ok.addEventListener("click", (evt)=>{
            this.ocultar()
        })
        rodape.appendChild(btn_ok)
    }

    static ocultar=()=>{
        this.divmsg.remove()
    }
}

export{Cxmsg}