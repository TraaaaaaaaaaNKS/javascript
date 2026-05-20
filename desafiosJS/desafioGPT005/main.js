let botao = document.querySelector("button#btn");
let body = document.querySelector("body");

botao.addEventListener("click", () => {
    const MN = body.classList.toggle("noturno")
    if (MN) {
        botao.innerHTML = "Modo claro"
    } else {
        botao.innerHTML = "Modo escuro"
    }
})

