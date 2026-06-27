class Carro {
    constructor(pmarca, pmodelo, pano, plig) {
        this.marca = pmarca
        this.modelo = pmodelo
        this.ano = pano
        this.ligado = plig
    }

    ligar() {
        this.ligado = true
        console.log(`O ${this.marca} foi ligado!`) 
    }
}

const carro1 = new Carro("Fiat", "Uno", 2015, false) 
const carro2 = new Carro("Chevrolet", "Onix", 2020, false)
const carro3 = new Carro("Honda", "Civic", 2022, false)

console.log(carro3)
carro1.ligar()


