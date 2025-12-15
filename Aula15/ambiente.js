let frutas = [];

// criar o botão uma vez só
let esvaziar = document.createElement("input");
esvaziar.type = "reset";
esvaziar.id = "esvaziar";
esvaziar.value = "Limpar carrinho";
document.body.append(esvaziar);

function adicionar(){
    let nomefruta = document.getElementById("frutas");
    let fruta = nomefruta.value;
    let res = document.getElementById("res");

    function limpar() {
        res.innerHTML = "";
        frutas = []; // limpa o array também
    }

    esvaziar.onclick = limpar;

    if (fruta.length == 0){
        alert("Digite uma fruta!");
    } else {
        frutas.push(fruta);
        nomefruta.value = "";
        nomefruta.focus();
        
        res.innerHTML = "";
        for(let f of frutas){
            res.innerHTML += `${f} <br>`;
        }
    }    
}


