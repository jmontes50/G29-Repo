

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respuesta) => {
//   console.log("Respuesta:", respuesta); //es la respuesta HTTP, pueden pensar en ella como una guía de remisión
//   return respuesta.json();
// })
// .then((users) => {
//   console.log("Usuarios", users);
// })

const getUsers = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const users =  await respuesta.json()
    console.log(users)
  } catch (error) {
    console.log(error);
  }
}
getUsers();
