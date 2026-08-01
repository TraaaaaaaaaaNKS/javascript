const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt)=>{

})

//  LocalStorage
let num = 10
const nome = localStorage.setItem("nome", "Diogo")
const curso = localStorage.setItem("curso", "JavaScript")


alert(localStorage.getItem(localStorage.key(0)))
localStorage.clear()

// SessionStorage

sessionStorage.setItem("nome", "Diogo")
sessionStorage.setItem("curso", "JavaScript")