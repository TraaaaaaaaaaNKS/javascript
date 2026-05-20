/* function soma(...valores) {
    let res = 0
    for (let v of valores) {
        res += v
    }
    return res
}

console.log(soma(10, 5, 2, 15, 8));
*/


function Maior(...numeros) {
    let valorI = numeros[0]
    for(let v of numeros) {
        if (valorI < v) {
            valorI = v
        }
    }
    return valorI
}
console.log(Maior(10, 11, 22, 32, 102, 134, 300))