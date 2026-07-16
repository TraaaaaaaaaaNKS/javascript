const cursos = ["JavaScipt", "HTML", "Python", "C++", "Java", "C#", "CSS", "React"]
// const getTodosCursos = () => {
//     return cursos
// }

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos, getCurso}
