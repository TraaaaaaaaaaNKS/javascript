function verificar() {
    let valor = (document.getElementById("numero").value);
    let n1 = Number(valor);
    let res = document.getElementById("res");

    if (valor.length == 0) {
        alert("Insira um número!");
    } else if(n1 % 2 == 0) {
            res.innerHTML = (`${n1} é um número par`);
        } else {
            res.innerHTML = (`${n1} é um número ímpar`)
    }
    }