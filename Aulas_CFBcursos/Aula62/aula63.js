class Carro {
    constructor(nome,portas){
        this.nome=nome
        this.porta=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas) //Aqui chamo o constructor da classe pai(Carro)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}
const c1 = new Carro("SUV", 4)
c1.vel = 200
c1.setCor("Preto")



console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.porta}`)
console.log(`Ligar: (${c1.ligado?"Sim":"Não"})`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("------------------------")

//Carro da classe militar
const c2 = new Militar("Tanque",1,100,50)
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.porta}`)
console.log(`Ligar: (${c2.ligado?"Sim":"Não"})`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Blindagem: ${c2.blindagem}`)

