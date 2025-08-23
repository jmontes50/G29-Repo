//Vamos a hacer que una función represente una parte de mi Interfaz
/**
 * Representa un elemento tarea
 * @param objetoTarea es un objeto con tarea como string y finalizado como booleano
 * @returns Object element que presenta esa tarea
 */
const ComponenteTarea = (objetoTarea) => {
  console.log("objeto tarea:", objetoTarea);
  //vamos a combinar document.createElement e innerHTML
  //creamos el elemento, como objeto Element
  const divTarea = document.createElement("div");
  //lo rellenamos de información
  divTarea.innerHTML = `
    <span>${objetoTarea.tarea} - ${objetoTarea.finalizado ? "Hecho" : "Pendiente"}</span>
    <button class="btn-hecho">Hecho!</button>
  `
  //retornamos el objeto Element ya rellenado
  return divTarea;
}

export default ComponenteTarea;
