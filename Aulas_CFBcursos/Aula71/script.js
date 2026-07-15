const olhos = [...document.getElementsByClassName("olho")]

window.addEventListener("mousemove", (evt)=>{
    let posx_mouse = evt.clientX
    let posy_mouse = evt.clientY

    const rot = Math.atan2(posy_mouse, posx_mouse)*360/Math.PI

    olhos.forEach((o)=>{
        o.style.transform = "rotate("+rot+"deg)"
    })
})
