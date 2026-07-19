const nome = Symbol("eu")
const numero = Symbol("nome")
const corUniforme = Symbol("preto")

const Jogador = {
    [nome]: "j1",
    [numero]: 10,
    corUniforme: "amarelo"
}

for(p in Jogador){
    console.log(p)
}

console.log(Jogador[nome])
