const consultarTarea = () => {
  let continuar = true;
  do {
    const nuevaTarea = prompt("Ingrese una nueva tarea");
    console.log(nuevaTarea);
    continuar = confirm("Desee seguir agregando tareas???");
    //No es necesario poner continuar = true, porque continuar ya es una expresión booleana
  } while ( continuar )
}

consultarTarea();
