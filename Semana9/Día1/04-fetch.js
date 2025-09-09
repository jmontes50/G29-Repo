

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respuesta) => {
//   console.log("Respuesta:", respuesta); //es la respuesta HTTP, pueden pensar en ella como una guía de remisión
//   return respuesta.json();
// })
// .then((users) => {
//   console.log("Usuarios", users);
// })
const bodyHTML = document.querySelector("body");

const getUsers = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const users =  await respuesta.json()
    console.log(users);

    users.forEach((user) => {
    bodyHTML.innerHTML = bodyHTML.innerHTML + `
      <div>
        <h4>${user.name}</h4>
        <p>${user.email} - ${user.company.name}</p>
      </div>
    `;
    })


  } catch (error) {
    console.log(error);
  }
}
getUsers();

const getProducts = async () => {
  try {
    const res = await fetch("https://68ad2f03a0b85b2f2cf263b4.mockapi.io/productos")
    console.log(res);
    const data = await res.json();
    console.log(data)
  } catch (error) {

  }
}
getProducts();
