let nome = new String("José Diogo Alves Leite")
let nome2 = new String("José Diogo Alves Leite")
let canal = new String("CFBCursos")

console.log(nome)
console.log(typeof(nome))

//Me retorna a string que está na posição 0, nesse caso "D".
console.log(nome.charAt(0))

//Me retorna o código da string especifica, nesse caso "i".
console.log(nome.charCodeAt(1))

// Serve pra concatenar duas strings.
console.log(nome.concat(canal))

//Serve pra retornar a posição da primeira string especificada (), se o valor for -1 quer dizer que ele não achou a string especifica.
console.log(nome.indexOf("g"))

//Retorna a última string especificada().
console.log(nome.lastIndexOf("o"))

//Se retornar -1 ou 1 é porque as strings são diferentes, se retornar 0 é porque as strings são iguais.
console.log(nome.localeCompare(nome2))

// O primeiro valor é o que eu quero substituir e o segundo é o que eu quero colocar no lugar do substituído...Atento que só subistitui apenas o primeiro valor encontrado e posso substituir varios caracteres ao mesmo tempo.
console.log(nome.replace("o", "a"))

//Procura a primeira substring 
console.log(nome.search("Alves"))

// Estou pegando a substring "Alves", dentro da minha string "José Diogo Alves Leite", O 'Alves' começa na posição 11 e termina na 16. Basicamente o slice serve pra pegar mais de uma substring.
console.log(nome.slice(11, 16))

//Recorta a substring que eu pedir, separando os valores apartir da substring recortada e transformando em um Array
let a_nome = nome.split(" ")
console.log(a_nome)

