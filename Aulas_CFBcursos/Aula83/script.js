let nome = new String("Bruno Pinho Camposssssss 1978")
let email = "Bruno@bruno.com.br"

console.log(nome)
  
console.log(nome.search(/pinho/i))

console.log(nome.match(/o/ig))

console.log(nome.replace(/"pinho"/i, "teste"))

console.log(/c/i.test(nome))

//Meta caracteres
console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bP/ig))

//Quantificadores 
console.log(nome.match(/o+|s+/ig))
console.log(nome.match(/no*/ig))