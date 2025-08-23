import listaTareas, { agregarTarea } from "./data.js";

const inputTarea = document.getElementById("input-tarea");
const btnTarea = document.getElementById("btn-tarea");
//recordemos que querySelector usa el selector como si fuera CSS
const divListaTareas = document.querySelector("#lista-tareas");
// console.log(inputTarea, btnTarea, divListaTareas);

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

  listaTareas.forEach((item) => {
    divListaTareas.innerHTML = divListaTareas.innerHTML + `
      <div>
        <span>${item.tarea}<span> - <button>Hecho!</button>
      </div>
    `
  })

  console.log("Reporte de tareas:");
  console.table(listaTareas);
}
consultarTarea();

const app = () => {
  btnTarea.addEventListener("click", () => {
    // console.log("click de btn Tarea!!!");
    //el valor de un input lo podemos obtener con la propiedad .value
    console.log("Value Input Tarea:",inputTarea.value);
    const textoNuevaTarea = inputTarea.value;
    agregarTarea(textoNuevaTarea)
  })
}
app();
