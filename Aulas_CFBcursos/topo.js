const body = document.body


const topo = document.createElement("div")

topo.setAttribute("id", "topo")
topo.classList = "topo"
body.prepend(topo)

const h1 = document.createElement("h1")
h1.setAttribute("id", "titulo")
h1.classList = "titulo"
h1.innerHTML = "Meu Site"
topo.appendChild(h1)

const login = 
"<div id= 'login' class='login'>"+
    "<p id='matricula'>Matrícula: <span>124530</span></p>"+
    "<p id='nome'>Nome: <span>José Diogo Alves Leite</span></p>"+
"</div>";

topo.innerHTML += login
