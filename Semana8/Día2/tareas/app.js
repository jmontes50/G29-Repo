import listaTareas, { agregarTarea } from "./data.js";

const consultarTarea = () => {
/*
//la forma antigua solo a nivel de datos
  let continuar = true;
  do {
    const nuevaTarea = prompt("Ingrese una nueva tarea");
    console.log(nuevaTarea);
    const objNuevaTarea = {
      tarea: nuevaTarea,
      finalizado: false
    }
    console.log(objNuevaTarea)
    // listaTareas.push(objNuevaTarea);
    agregarTarea(objNuevaTarea)
    continuar = confirm("Desee seguir agregando tareas???");
    //No es necesario poner continuar = true, porque continuar ya es una expresión booleana
  } while ( continuar )
  //finalizando el do while
*/
  console.log("Reporte de tareas:");
  console.table(listaTareas);
}

consultarTarea();
