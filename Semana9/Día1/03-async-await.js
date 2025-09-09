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

//función clásica pero con async
async function operacion2() {
  const suerte = Math.random();
  console.log(suerte);
  if(suerte > 0.4){
    return "La operación2 fue exitosa!"; //resolve
  }else{
    throw "La operación2 fallo"; //reject
  }
}

const ejecutar = async () => {
  try {
    //intentando ejecutar
    const res = await operacion1();
    const res2 = await operacion2();
    console.log(res);
    console.log(res2)
  } catch (error) {
    //lo que hacemos para manejar el error
    console.log("Errooor", error);
  }
}
ejecutar();

// operacion1()
// .then((respuesta) => {
//   console.log(respuesta);
// })
// .catch((error) => {
//   console.log(error);
// })
