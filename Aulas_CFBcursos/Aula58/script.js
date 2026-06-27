class Carro {
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if(ptipo == 2) {
            this.tipo = "Utilitário"
            this.velmax = 100
        } else if(ptipo == 3) {
            this.tipo = "Passeio"
            this.velmax = 160
        } else {
            this.tipo = "Militar"
            this.velmax = 170
        }
    }
    // Retorna apenas o nome do carro
    getNome() {
        return this.nome
    }

    // retorna apenas o tipo do carro
    getTipo() {
        return this.tipo
    }

    // Retorna apenas a velocidade do carro
    getVelMax() {
        return this.velmax
    }

    // Retorna todas as informações do carro em um array
    getINFO(){
        return [this.nome, this.tipo, this.velmax]
    }
    
    //Com o set eu altero as propriedas da classe
    setNome (nome) {
        this.nome = nome
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log("-------------------")
    }
}

let c1 = new Carro("Porsche", 1)
let c2 = new Carro("BMW X3", 2)
let c3 = new Carro("Land rover", 3)
let c4 = new Carro("Jeep", 4)

c1.setNome("Ferrari")
c2.info()