const elem_seccion1 = document.getElementById("seccion1");
const elem_seccion2 = document.getElementById("seccion2");

//estoy tomando el innerHTML actual y le concateno el HTML que deseamos
elem_seccion1.innerHTML = elem_seccion1.innerHTML + `
<p>párrafo desde JS1</p>
<p>párrafo desde JS2</p>
<p>párrafo desde JS3</p>
<button id="btn">click</button>
`; //string

const btnClick = document.getElementById("btn"); //element

console.log(btnClick);
//estamos creando el elemento(objeto) en memoria, desde JS
const btnSeccion2 = document.createElement("button");

btnSeccion2.innerHTML = "Botón sección 2";

btnSeccion2.style.color = "blue";

console.log(btnSeccion2);

//appendChild es añadir a otro elemento un elemento hijo
elem_seccion2.appendChild(btnSeccion2);
