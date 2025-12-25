//const soma = function(v1, v2){
// return v1 + v2;
//                            }  Basicamente faz a mesma coisa que o arrow function.

const soma = (v1, v2) => {
    return v1 + v2
}

console.log(soma(10, 12)); 

const nome = n => {
    return n
}
console.log(nome("Diogo"));

const add = n => n + 10
console.log(add(10));


// É até mais inteligente fazer dessa forma.

//Posso tirar as chaves e o return que vai funcionar "mas tem que ter a chamada da variavel" e se for uma function mais elaborada, aí preciso usar as chaves {}