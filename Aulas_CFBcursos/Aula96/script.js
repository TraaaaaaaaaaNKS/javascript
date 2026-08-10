import { Cxmsg } from "./cxmsg.js"

const config = {
    titulo: 'Curso JavaScript',
    texto:"CFB Cursos",
    cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarmsg")

btn_mostrarcxmsg.addEventListener("click", ()=>{
    Cxmsg.mostrar("CFB Cursos", "Curso JavaScript")
})