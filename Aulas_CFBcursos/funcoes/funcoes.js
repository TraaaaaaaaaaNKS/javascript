/* function mudartexto() {
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    d1.innerHTML = ("CFB Cursos");
    d2.innerHTML = ("CFB Cursos");
    d3.innerHTML = ("CFB Cursos");
} */

function cal() {
    let n1 = 3
    let n2 = 10
    let res = n1 * n2
    if(res % 2 == 0){
        return "par"
    } else{ 
        return "Ímpar"
}
}
let num = cal()
console.log(num)
