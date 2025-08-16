let num1 = 10;

let texto = "Hola!"

//Ciudadano de 1ra clase: Las funciones pueden ser utilizadas como una referencia y/o variable más

// function tarea(){
//   console.log("Buenas noches!!!");
// }

// función anónima
const tarea = function() {
  console.log("Buenas noches!!!");
}

console.log("Revisndo el contenido de tarea", tarea) //una cosa es la referencia y otra cosa es la ejecución

// tarea();

function horario (hora, tareaAEjecutar){
  if(hora > 18) {
    console.log("Hora de hacer tareas!!!!");
    tareaAEjecutar();
  }
}

horario(20, tarea);
