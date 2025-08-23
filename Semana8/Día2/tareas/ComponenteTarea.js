//Vamos a hacer que una función represente una parte de mi Interfaz
/**
 * Representa un elemento tarea
 * @param objetoTarea es un objeto con tarea como string y finalizado como booleano
 * @returns Object element que presenta esa tarea
 */
const ComponenteTarea = (objetoTarea, index) => {
  console.log("objeto tarea:", objetoTarea);
  //vamos a combinar document.createElement e innerHTML
  //creamos el elemento, como objeto Element
  const divTarea = document.createElement("div");
  //lo rellenamos de información
  divTarea.innerHTML = `
    <span>${objetoTarea.tarea} - ${objetoTarea.finalizado ? "Hecho" : "Pendiente"}</span>
    <button class="btn-hecho">Hecho!</button>
  `
  //Algo que podemos aplicar dentro de un elemento, es un querySelector
  const btnHecho = divTarea.querySelector(".btn-hecho");
  btnHecho.addEventListener("click", () => {
    console.log("btn hecho!!", objetoTarea.tarea, index);
  })
  console.log("btnHecho:", btnHecho)
  //retornamos el objeto Element ya rellenado
  return divTarea;
}

export default ComponenteTarea;
