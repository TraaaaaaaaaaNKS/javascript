
let addnumero = [];

function adicionar() {
  let input = (document.getElementById("numero"));
  let numero = Number(input.value);

    if (input.value.length === 0 || numero > 100 || numero == 0) {
    alert("Caixa vazia ou número inválido");
    return;

  }else if(addnumero.includes(numero)){
    alert("Esse número já foi adicionado!");
    return;

  }else {
    addnumero.push(numero);
    let list = document.getElementById("numsel");
    let option = document.createElement("Option");
    list.appendChild(option);
    option.innerHTML = `O valor inserido foi ${numero}`;
  }

  
  input.focus()
}

function finalizar() {

  if (addnumero.length === 0) {
    alert("Adicione um número!")
    return;
  } else {
    let section = document.getElementById("info");
    section.innerHTML = "";
  //Menor valor

  let menor = Math.min(...addnumero);
  let menornum = document.createElement("p");
  section.appendChild(menornum);
  menornum.innerHTML = `O menor número informado foi ${menor}!`;

  //Maior valor

  let maior = Math.max(...addnumero);
  let maiornum = document.createElement("p");
  section.appendChild(maiornum);
  maiornum.innerHTML = (`O maior número informado foi ${maior}!`);

  //Soma de todos os valores
  let soma = 0
  for(let valsoma of addnumero) {
    soma += valsoma;
  }
  let somanum = document.createElement("p");
  section.appendChild(somanum);
  somanum.innerHTML = `A soma entre todos os números informados é ${soma}!`

  //Média dos valores

  let valmedia = soma / addnumero.length;

  let medianum = document.createElement("p");
  section.appendChild(medianum);
  medianum.innerHTML = `A média entre todos os números informados é ${valmedia}!`

  return;
}
}


// Ele quer o maior valor informado - O menor informado - A soma de todos os valores - A média dos valores informados.
