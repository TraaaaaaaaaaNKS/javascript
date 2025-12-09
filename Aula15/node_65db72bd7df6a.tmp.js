let valores = [8, 7, 1, 4, 2, 9];
console.log(valores.length)

for(let pos = 0; pos <= valores.length; pos++){
    valores.push(3);
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);

}