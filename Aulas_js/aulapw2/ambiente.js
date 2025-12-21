const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015, 
    placa: "KGS-4397",
    buzina: function(){alert("biiiiiiiii") },
    completo: function(){
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`
    }
};

console.log(carro.completo());

