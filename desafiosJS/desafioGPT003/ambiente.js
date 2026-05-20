let red = document.querySelector("div#Vermelho");
let yellow = document.querySelector("div#Amarelo");
let green = document.querySelector("div#Verde");

function apagartodas() {
    red.style.backgroundColor = "rgb(92, 20, 20)";
    yellow.style.backgroundColor = "rgb(54, 47, 8)";
    green.style.backgroundColor = "rgb(16, 59, 33)";
}

function Vermelho(){
    apagartodas()
    red.style.backgroundColor = "red";
}

function Amarelo(){
    apagartodas()
    yellow.style.backgroundColor = "Yellow"; 
}
function Verde(){
    apagartodas()
    green.style.backgroundColor = "lime";
    
}
