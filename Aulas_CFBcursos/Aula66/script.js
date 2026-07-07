class Carro {
    constructor(tipo, estagioDoTurbo){
        this.turbo = new Turbo(estagioDoTurbo)
            if(tipo == 1){
                this.velMax = 120
                this.nome = "Normal"
            }
            else if(tipo == 2){
                this.velMax = 170
                this.nome = "Esportivo"
            } else if(tipo == 3){
                this.velMax = 200
                this.nome = "Super Esportivo"
        }
        this.velMax+=this.turbo.potencia
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Tipo de turbo: ${this.turbo.potencia}`)
        console.log("--------------------")
    }
}

class Turbo {
    constructor(stg){
        if(stg==0){
            this.potencia = 0
        } else if(stg==1){
            this.potencia = 50
        } else if (stg==2){
            this.potencia = 75
        }else if(stg==3){0
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioDoTurbo){
        super(4, estagioDoTurbo)
        this.tipoinfo == 1
        this.velMax = 300+this.turbo.potencia
        this.nome = "Carro Especial"
    }
    info(){
        if(this.info==1){
            super.info()
        } else {
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Tipo de turbo: ${this.turbo.potencia}`)
        console.log("--------------------")
        }
    }
}

const carro1 = new Carro(1, 0)
const carro2 = new Carro(2, 1)
const carro3 = new CarroEspecial(3)


carro1.info()
carro2.info()
carro3.info()
