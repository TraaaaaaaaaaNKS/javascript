const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tlimpar = document.getElementById("limpar")
const igual = document.getElementById("tigual")
const tcpy = document.getElementById("tcpy")
const teste = document.getElementById("teste")
const all_calc = document.querySelector("#all_calc")
const calc_aba = document.getElementById("calc_aba")

let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if(evt.target.innerHTML == "."){
            if(decimal==false){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
        }
            display.innerHTML+= evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(sinal==false){
            decimal = false
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML+=  "*"
            } else{
            display.innerHTML+= evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", ()=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", ()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res

})

tcpy.addEventListener("click", (evt)=>{
     //navigator.clipboard.writeText(display.innerHTML)
     navigator.clipboard.writeText(display.innerHTML)
    alert("Tem certeza que deseja copiar?")
})


calc_aba.addEventListener("click", (evt)=>{
    all_calc.classList.toggle("all_calc_exibir")
})
