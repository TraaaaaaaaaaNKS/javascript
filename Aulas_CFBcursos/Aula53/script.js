let soma = document.querySelector("button#soma")
let subtrair = document.querySelector("button#subtracao")
let multiplicar = document.querySelector("button#multiplicacao")
let dividir = document.querySelector("button#divisao")
const res = document.querySelector("#res")

const op = [
/* SOMA */   () => {
        let n1 = (document.querySelector("input#n1").value)
        let n2 = (document.querySelector("input#n2").value)
        const val = [n1, n2]
        res.innerHTML = (Number(val[0]) + Number(val[1]))
    }, 
/* SUBT */   () => {
        let n1 = (document.querySelector("input#n1").value)
        let n2 = (document.querySelector("input#n2").value)
        const val = [n1, n2]
        res.innerHTML = (Number(val[0]) - Number(val[1]))
    },
/* MULT */    () => {
        let n1 = (document.querySelector("input#n1").value)
        let n2 = (document.querySelector("input#n2").value)
        const val = [n1, n2]
        res.innerHTML = (Number(val[0]) * Number(val[1]))
    },
/* DIVI */    () => {
        let n1 = (document.querySelector("input#n1").value)
        let n2 = (document.querySelector("input#n2").value)
        const val = [n1, n2]
        res.innerHTML = (Number(val[0]) / Number(val[1]))
    },
 
]

soma.addEventListener("click", op[0])
subtrair.addEventListener("click", op[1])
multiplicar.addEventListener("click", op[2])
dividir.addEventListener("click", op[3])


/*let valores = [1, 2, 3, 4, 5, 6]

const op = [
    (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }, 
    (val) => {
        let res = 1
        for(v of val) {
            res *= v
        }
        return res
    },
    (val) => {
    for(v of val) {
        console.log(v)
    }
}
]

op[2](valores) */