//Eventos
const inputNombre = document.getElementById("input-nombre");
const inputApellidos = document.getElementById("input-apellidos");
const inputTerminos = document.querySelector("#input-terminos");
const formRegistro = document.getElementById("registro");

//el preventDefault aplica a formulario e hipervinculos <a>
formRegistro.addEventListener("submit", (evento) => {
  //submit tiene el evento/acción por defecto de intentar enviar los datos del formulario y recargar la app web.
  //con .preventDefault lo que logramos es cortar ese evento por defecto y seguir ejecutando código.
  evento.preventDefault();
  console.log(evento);
  console.log("ejecutando Submit!!!");
})

inputNombre.addEventListener("input", (ev) => {
  //estamos obteniendo el value directamente del target (el propio elemento) cada vez que escribimos
  console.log("target value: ",ev.target.value);
})
