let nome = document.querySelector("#nome")
let cargo = document.querySelector("#cargo")
let salario = document.querySelector("#salario")
let btn_cadastrar = document.querySelector("#btn_cadastrar")
let area = document.querySelector("#area")
 
class Funcionario {
    constructor(pnome, pcargo, psalario){
        this.nome = pnome
        this.cargo = pcargo
        this.salario = Number(psalario)
    }
    bonus(){
        if(this.salario < 2000){
            return this.salario * 0.1000

        } else if(this.salario >= 2000 && this.salario <= 5000){ 
           return this.salario * 0.0500       
        } else {
            return 0
        }
    }
    salarioFinal(){
        return this.salario+this.bonus()
    }
}

let a_funcionarios = []

btn_cadastrar.addEventListener("click", ()=>{
    if(nome.value == "" || cargo.value == "" || salario.value == ""){
        alert("Preencha os campos corretamente.")
    } else if(salario.value < 0){
        alert("Salário Inválido")
    } else {
        area.innerHTML = ""
        let novo_Funcionario = new Funcionario(nome.value, cargo.value, salario.value)
        a_funcionarios.push(novo_Funcionario)
        a_funcionarios.forEach((f)=>{

            let mostrarF = document.createElement("div")
            mostrarF.setAttribute("class", "funcionario")
            area.appendChild(mostrarF)
            mostrarF.innerHTML = `Nome: ${f.nome}<br> Cargo: ${f.cargo}<br> Salário: R$ ${f.salario}<br> Bônus: ${f.bonus()}<br> Salário Final: R$${f.salarioFinal()}`
        })
        salario.value = ""
        cargo.value = ""
        nome.value = ""
    }
})