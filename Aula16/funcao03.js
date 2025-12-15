//Recursividade

function fatorial (n) {
    if (n == 1) {                                //Condição de parada!
        return 1
    } else {                                     
        return n * fatorial(n-1)                //Chamada recursiva
    }
}

console.log(fatorial(6))

