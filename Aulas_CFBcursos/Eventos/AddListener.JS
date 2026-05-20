const c1 = document.querySelector("#c1")

const msg = () => {
    alert("clicou")
}

c1.addEventListener("click", (evt) => {
    msg()
    console.log(evt)
})