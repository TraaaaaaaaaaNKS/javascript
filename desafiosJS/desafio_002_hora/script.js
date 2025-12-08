function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/Manha.jpg'
    document.body.className = 'manha'
} else if (hora >= 12 && hora < 19) {
    //Boa Tarde!
    img.src = 'imagens/tarde.jpg'
    document.body.style.color = "white"
    document.body.style.backgroundImage = "url(imagens/tarde_background.jpg)"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
} else {
    //Boa Noite!
    img.src = 'imagens/noite.jpg'
    document.body.style.backgroundImage = "url('imagens/noite_background.jpg')";
    document.body.style.backgroundSize = "cover" 
    document.body.style.backgroundPosition = "center bottom"
    document.body.style.backgroundRepeat = "no-repeat"
}
}
 