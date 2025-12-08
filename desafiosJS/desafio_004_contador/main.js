function Contar() {
var start = Number(document.getElementById("inicio").value);
var end = Number(document.getElementById("fim").value);
var pass = Number(document.getElementById("passo").value);
var contagem = document.getElementById("contagem");

contagem.innerHTML = "";

if (start == 0 || pass == 0 || end == 0){
    alert("[ERRO!] verifique seus dados");
    return;
}
while (start <= end) {
    contagem.innerHTML += (`${start} > `);
    start += pass;
}

contagem.innerHTML += "🏁";
}