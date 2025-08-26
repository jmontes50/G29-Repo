// const operacion1 = () => new Promise((resolve, reject) => {
//   const suerte = Math.random();
//   console.log(suerte);
//   if(suerte > 0.4){
//     resolve("La operación fue exitosa!");
//   }else{
//     reject("La operación fallo");
//   }
// })

const operacion1 = async () => {
  const suerte = Math.random();
  console.log(suerte);
  if(suerte > 0.4){
    return "La operación fue exitosa!"; //resolve
  }else{
    throw "La operación fallo"; //reject
  }
}

// operacion1()
// .then((respuesta) => {
//   console.log(respuesta);
// })
// .catch((error) => {
//   console.log(error);
// })

const ejecutar = async () => {
  try {
    //intentando ejecutar
    const res = await operacion1();
    console.log(res);
  } catch (error) {
    //lo que hacemos para manejar el error
    console.log("Errooor", error)
  }
}
ejecutar();
