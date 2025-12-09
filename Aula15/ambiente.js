let valores = [8, 7, 1, 4, 2, 9];
console.log(valores.length);
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
let pos = valores.indexOf(2);
if (pos == -1) {
    console.log ('O valor não foi encontrado!');
} else {
    console.log(pos);
}