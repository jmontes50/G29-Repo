const listaTareas = [
  {
    tarea: "Repasar código",
    finalizado: false
  }
]

const agregarTarea = (tarea) => {
  listaTareas.push(tarea);
  console.log("Tarea Agregada!!");
}

//cuando tengo 01 sola referencia para exportar, lo ideal es default
export default listaTareas;

export {
  agregarTarea
}

//si es más de 1, de 2 a más, usamos {}  -> export { ref1, ref2, ref3 ... }
