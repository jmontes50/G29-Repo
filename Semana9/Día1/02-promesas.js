/*
const hacerCanchita = (cb) => {
  setTimeout(() => {
    console.log("Canchita hecha!!!");
    cb(); //función callback
  }, 3000)
}

hacerCanchita(() => {
  console.log("vamos a la entrada")
})
*/
const hacerCanchita = () => {
  return new Promise((resolve, reject) => {
    //el código asíncrono va a estar dentro de la función de la nueva Promesa
    setTimeout(() => {
      // console.log("Canchita hecha!!!");
      // resolve("Canchita hechaa!!!!");//resultado positivo
      reject("No se acabó la canchita")
    }, 3000);
  });
};

hacerCanchita()
.then((respuesta) => {
  // console.log(respuesta);
  console.log(`${respuesta}, vamos a la entrada`);
  console.log("validando entrada...");
})
.catch((err) => {
  console.log(err);
})
