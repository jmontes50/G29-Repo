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
      resolve("Canchita hechaa!!!!"); //resultado positivo
      // reject("No se acabó la canchita"); //resultado negativo
    }, 3000);
  });
};

//retornando directamente la función flecha
const pedirBebida = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {

      const suerte = Math.random();
      console.log(suerte);
      if(suerte > 0.5){ //resolve
        resolve("La bebida esta lista");
      }else{
        reject("la bebida se derramó");
      }
    }, 2000);
  });

hacerCanchita()
  .then((respuesta) => {
    console.log(respuesta);
    return pedirBebida(); //estaria retornando otra promesa
    //al retornar otra promesa, podemos encandenar un then y tener encadenamiento de promesas+
    // console.log(respuesta) ;
    // console.log(`${respuesta}, vamos a la entrada`);
    // console.log("validando entrada...");
  })
  .then((respuestaBebida) => {
    console.log(respuestaBebida);
  })
  .catch((err) => {
    console.log(err);
  });
