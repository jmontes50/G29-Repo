//Eventos
const inputNombre = document.getElementById("input-nombre");
const inputApellidos = document.getElementById("input-apellidos");
const inputTerminos = document.querySelector("#input-terminos");
const formRegistro = document.getElementById("registro");

//leyendo la informacion de LS, da texto
const infoLocalStorage = localStorage.getItem("info-usuario");

console.log("info LS", infoLocalStorage);

if(infoLocalStorage){ //si existe
  //lo convertimos de vuelta a JS
  const parsedInfo = JSON.parse(infoLocalStorage);
  console.log("parsed", parsedInfo);
  //y usamos los valores de las propiedades para rellenar los values de los input
  inputNombre.value = parsedInfo.nombre;
  inputApellidos.value = parsedInfo.apellidos;
}

//setTimeout (funcion, tiempo en ms)
setTimeout(() => {
  console.log("ejecutando con setTimeout");
  localStorage.removeItem("info-usuario");
}, 10000)

//el preventDefault aplica a formulario e hipervinculos <a>
formRegistro.addEventListener("submit", (evento) => {
  //submit tiene el evento/acción por defecto de intentar enviar los datos del formulario y recargar la app web.
  //con .preventDefault lo que logramos es cortar ese evento por defecto y seguir ejecutando código.
  evento.preventDefault();
  console.log(evento);
  console.log("ejecutando Submit!!!");
  const objUsuario = {
    nombre: inputNombre.value,
    apellidos: inputApellidos.value,
    //checked en input radio, checkbox, van a ser los que dicen si están verificados o no
    aceptaTerminos: inputTerminos.checked
  }
  console.log("objUsuario", objUsuario)
  //Aplicar JSON, JSON es un objeto de JS que tiene métodos para transformar de codigo js a string y viceversa
  const objUsuarioJSON = JSON.stringify(objUsuario);
  console.log("objUsuarioJSON:", objUsuarioJSON);
  console.log("objUsuarioJSON typeof:", typeof objUsuarioJSON);

  const objUsuarioParsed = JSON.parse(objUsuarioJSON);
  console.log("objUsuarioParsed:", objUsuarioParsed);

  //.setItem("nombre", "valor a guardar ya en texto")
  localStorage.setItem("info-usuario", objUsuarioJSON);
})

inputNombre.addEventListener("input", (ev) => {
  //estamos obteniendo el value directamente del target (el propio elemento) cada vez que escribimos
  console.log("target value: ",ev.target.value);
})
