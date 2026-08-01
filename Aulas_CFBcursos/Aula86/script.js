const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt)=>{
    let estadoValidacao = f_nota.validity;
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Digite a nota corretamente!"); //Mostrar na caixa de erro do navegador.
    };
    f_nota.reportValidity();
    f_msg.innerHTML = f_nota.validationMessage; // Mostrar no HTML
    evt.preventDefault();
}) ;