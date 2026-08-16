class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static accessologado = null;
    static endpoint = "http://localhost:8080/";
    static login = (mat, pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true;
            }
        })
    }
}
export{Login}