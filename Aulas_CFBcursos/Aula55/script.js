let caixa = document.querySelector("div#caixa")
let musicas = new Set(["Música", "Música 2", "Música 3"])

musicas.add("musica boa")
musicas.add("musica 1")
musicas.add("musica 1")
musicas.add("musica 10")

musicas.clear
console.log(musicas)

/* musicas.forEach((el) => {
    caixa.innerHTML += `${el} <br>`
}) */

for(let m of musicas) {
    console.log(m)
}