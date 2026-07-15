const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando..."
    promessa()
    .then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
})
    .catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

const promessa = ()=>{
    let p = new Promise((resolve, reject)=>{
    let resultado = false
    let tempo = 3000
    setTimeout(()=>{
        if(resultado){
            resolve("Deu Certo!")
        } else{
            reject("ERRO!")
        }
    }, tempo)
})
return p 
}

numero.innerHTML = "Esperando..."



