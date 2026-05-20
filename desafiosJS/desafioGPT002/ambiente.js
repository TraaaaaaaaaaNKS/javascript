let NumArmazenado = []

function adicionar() {
    let inumero = document.querySelector("input#numero").value;
    let numero = Number(inumero);
    let lista = document.querySelector("select#lista")

    if (numero === 0 || numero > 100 || numero === ""){
        alert("Número inválido!");
    } else if (NumArmazenado.indexOf(numero) == -1){
        let item = document.createElement("option");
        item.text = `Valor ${numero} adicionado.`;
        lista.appendChild(item);
        NumArmazenado.push(numero);
        
    } else {
        alert ("Esse número já existe na lista!");
    }
}

function finalizar() {
    // Total de números
    let totalnum = NumArmazenado.length(numero)
    let finish = document.querySelector("div#res");
    let numtotal = document.createElement("p");
    finish.text = `Ao todo, temos ${totalnum} números armazenados.`
    finish.appendChild(numtotal)
    
}

