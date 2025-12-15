function somar(){
    let num1 = document.getElementById("n1");
    let num2 = document.getElementById("n2");
    if (num1.value.length == 0 || num2.value.length == 0 ){
        alert("Preencha as caixas vazias!")
    } else {
        let n1 = Number(num1.value);
        let n2 = Number(num2.value);
        let res = document.getElementById("res");
        let vf = n1 + n2
        
        res.innerHTML = (`${vf}`)
    }
}