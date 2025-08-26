

fetch("https://jsonplaceholder.typicode.com/users")
.then((respuesta) => {
  console.log("Respuesta:", respuesta); //es la respuesta HTTP, pueden pensar en ella como una guía de remisión
  return respuesta.json();
})
.then((users) => {
  console.log("Usuarios", users);
})
