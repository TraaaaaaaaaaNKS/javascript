const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("Diogo")
const s4 = Symbol.for("diogo")

console.log(s1)
console.log(s2)

console.log(s3===s4)
console.log(typeof(s3))
console.log(Symbol.keyFor(s3))