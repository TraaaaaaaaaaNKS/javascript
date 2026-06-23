 const caixa1 = document.querySelector(".caixa")
 const btn_c = [...document.querySelectorAll(".cursos")]
 const c1_2 = document.querySelector("#c1_2")
 const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

 cursos.map((el, chave) => {
  console.log(chave)
  const novoelemento = document.createElement("div")
  novoelemento.setAttribute("id", `C${chave}`)
  novoelemento.innerHTML = el
  novoelemento.setAttribute("class", "cursos")



  novoelemento.addEventListener("click", (evt) => {
  caixa1.removeChild(evt.target)
  })
  caixa1.appendChild(novoelemento)
  
 })

//  const novoelemento = document.createElement("div")
//  novoelemento.setAttribute("id", "c7")
//  novoelemento.setAttribute("class", "cursos")
//  novoelemento.innerHTML = "ReactNative"

//  caixa1.appendChild(novoelemento)