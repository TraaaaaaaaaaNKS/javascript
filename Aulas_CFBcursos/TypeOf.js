class person{
    handle(){
        return "handle1"
    }
}

class otherPerson{
    handle(){
        return "handle2"
    }
}

let classesNames = [person, otherPerson]
function handleClasse(){
    if(classesNames.length <= 0){
        console.log("end")
        return false
    }

    console.log(classesNames)

    let className = new classesNames[0]
    className.handle()

    classesNames.shift();
    console.log(classesNames)
    handleClasse()
}

handleClasse()
