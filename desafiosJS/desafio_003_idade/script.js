function verificar() {
    var anoAtual = new Date().getFullYear();
    var anoNasc = Number(document.getElementById("anoNasc").value);
    var idade = anoAtual - anoNasc;
    var smasc = document.getElementById("masc");
    
    res = document.getElementById("res");
    if (anoNasc >= anoAtual || anoNasc == 0){
        alert("Digite o ano de nascimento corretamente!")
    }
    var genero = "";
    if (smasc.checked) {
        genero = ("um Homem");
    } else {
        genero = ("uma mulher");
    }

    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
}
