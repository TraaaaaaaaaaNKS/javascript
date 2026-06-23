const idade = [15, 21, 30, 17, 18, 44, 12, 50]
const par = idade.filter((valor) => {
    if (valor % 2 === 0) 
        return valor
})
console.log(idade)
console.log(`${par} são números par!`)