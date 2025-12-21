function verificar(){
    let nome = document.getElementById("nome").value;
    let idadeInput = document.getElementById("idade").value;
    let res = document.getElementById("res");
    res.innerHTML = "";

    if (nome.length === 0 || idadeInput.length === 0) {
        alert("Preencha os dados corretamente");
        return
    } 
    
    let idade = Number(idadeInput);
    
    if(idade > 17) {
        res.innerHTML = (`Oi, ${nome} <br> Você é um adulto!`)
    } else if (idade >= 12) {
        res.innerHTML = `Oi, ${nome} <br> Você é um adolescente!`
    } else {
        res.innerHTML = (`Oi, ${nome} <br> Você é uma criança!`)
    }
}