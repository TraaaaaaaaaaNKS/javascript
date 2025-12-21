function calcular() {
    let nome = document.getElementById("nome").value;
    let altura = Number(document.getElementById("altura").value.replace(",", "."));
    let peso = Number(document.getElementById("peso").value);
    let res = document.getElementById("res");

    let resimc = peso / (altura * altura);
    let imcformat = resimc.toFixed(2);
    let resposta = document.createElement("p");
    
    res.innerHTML = "";

    if (nome.length === 0 || altura === 0 || peso === 0) {
        alert("Preencha os dados!");
        return;

    } else if(resimc < 18.5){

         resposta.innerHTML = `${nome} seu IMC é ${imcformat} e você está abaixo do peso ideal!`

    } else if (resimc >= 18.5 && resimc < 24.9) {
        resposta.innerHTML = `${nome} seu IMC é ${imcformat} e você está no peso ideal!`

    } else {
        resposta.innerHTML = `${nome} seu IMC é ${imcformat} e você está acima do peso ideal!`
        
    }

    res.appendChild(resposta);
}