// Função contrutor anonima

 // ->   let funcao = new Function("v1", "v2", "return v1 + v2")  


  //Função anonima!

 let funcao = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
        return res
}
console.log(funcao(10, 20))