function tentar(){
let numero = document.getElementById("palpite").value;
let res = document.getElementById("res");
tentativa = document.getElementById("tentativas");
let palpitebot = Math.floor(Math.random() * 100) + 1;

 // Validações
if (numero.length == 0){
    alert("Preencha os dados corretamente!"); 
}

let palpite = (Number(numero));
if (palpite > 100 || palpite == 0 ) {
    alert("O número que você escolheu não é perimitido [Leia as regras]!");

}

// Condições

if (numero > palpitebot){
    res.innerHTML = `O número escolhido pelo bot foi ${palpitebot}, você venceu!`
    return 

    
} else if (numero < palpitebot){
    res.innerHTML = `O número escolhido pelo bot foi ${palpitebot}, você perdeu!`
}else {
    res.innerHTML = `O número escolhido pelo bot foi ${palpitebot}, vocês empataram!`
}

// Tentativas


tentativa.innerHTML = ``


}


