function verificar() {
    var anoAtual = new Date().getFullYear();
    var anoNasc = Number(document.getElementById("anoNasc").value);
    var idade = anoAtual - anoNasc;
    var smasc = document.getElementById("masc");
    var sfem = document.getElementById("fem");
    res = document.getElementById("res");
    if (anoNasc >= anoAtual){
        alert("[ERRO!] Verifique seus dados e tente novamente");
        return;
    }
    var img = document.createElement ('img')
    var genero = "";
    if (smasc.checked) {
        genero = ("um Homem");
    } else {
        genero = ("uma mulher");
    }

    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
}
