import listaTareas, { agregarTarea } from "./data.js";
import ComponenteTarea from "./ComponenteTarea.js";

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
  divListaTareas.innerHTML = ""; //limpiar una pizarra

  listaTareas.forEach((item, index) => {
    //a partir de un array volver a dibujar
    /*
    Usar innerHTML directamente puede ser contraproducente, porque estamos generando dinamicamente las tareas y el innnerHTML es un string
    divListaTareas.innerHTML = divListaTareas.innerHTML + `
      <div>
        <span>${item.tarea}<span> - ${item.finalizado ? "Hecho" : "Pendiente"}
        <button id="1">Hecho!</button>
      </div>
    `
    */
    console.log("item:", item);
    const elemTarea = ComponenteTarea(item, index);
    //agregamos el divTarea retornado como hijo de divListaTareas
    divListaTareas.appendChild(elemTarea);
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
    agregarTarea(textoNuevaTarea);
    //volver a llamar consultarTarea
    consultarTarea();
  })
}
app();
