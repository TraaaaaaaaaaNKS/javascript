let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let cursos = [...document.querySelectorAll("div.cursos")]
let botao = document.querySelector("#btn_copiar")



// O map pega cada elemento do array e coloca na variavel "el", utilizo a arrow function "=>", o "el" é cada elemento dos cursos, adiciono um evento de click e utilizo outra arrow function e passo o parâmetro "evt" que no caso é o evento que ocorreu, o "evt.target" significa em qual curso foi clicado, se cliquei no terceiro elemento o evt.target = terceiro curso, o curso.classList.toggle("selecionado") adiciona uma classe ao elemento que fiz no css "Basicamente quando eu clicar em um curso ele vai ficar marcado com as configurações da classe "selecionado"."

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target                                                                     
        curso.classList.toggle ("selecionado")
    });
})

botao.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selecionado")];
    const Naoselecionados = [...document.querySelectorAll(".cursos:not(.selecionado)")]
    selecionados.map((el) => {
        c2.appendChild(el)
    })
    Naoselecionados.map((el) => {
        c1.appendChild(el)
    })
})



// cursos = [...cursos] // AQUI estou transformando um HTML collection em um array.
