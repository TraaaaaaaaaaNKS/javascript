const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt)=>{
    alert("Olá, mundo!")
})

btn_confirm.addEventListener("click", (evt)=>{
    const ret = confirm("Você está aprendendo muito?")
    console.log(ret)
    if(ret){
        console.log("OK")
    } else{
        console.log("Cancelado")
    }
})

btn_prompt.addEventListener("click", (evt)=>{
    const idade= prompt("Digite sua idade")
    console.log(idade)
    if(idade == null){
        console.log("Botão cancelar pressionado")
    }
})