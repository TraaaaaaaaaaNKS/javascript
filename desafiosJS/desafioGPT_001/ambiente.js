let numero = document.querySelector("div#VerNumero");
let adicionar = document.querySelector("button#adicionar")
let resetar = document.querySelector("button#resetar")
adicionar.addEventListener("click", add);
resetar.addEventListener("click", reset)
let NumContador = Number(numero.innerText);

function add() {
    NumContador++
    numero.innerText = NumContador

    if (NumContador < 10){
        numero.style.background = "red"
    } else if (NumContador < 50) {
        numero.style.background = "blue"
    } else if (NumContador > 50){
        numero.style.background = "gold"
    }
}


function reset() {
    NumContador = 0
    numero.innerText = NumContador
    numero.style.background = "black"
}
