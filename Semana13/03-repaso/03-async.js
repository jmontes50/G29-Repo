console.log("1");
console.log("2");
console.log("dejame confirmar");

// async function reuna (){}
const reuna = async () => {
  // setTimeout(() => {
    let error = true;
    if (error) {
      // console.log(personaaaa)
      // console.mostrar("mas informacion");
      throw "✖️ No se puede"; //reject
    } else {
      return "👍 Ya confirme el Sab/27 sale!"; //resolve
    }
  // }, 4000);
};

const planearReunion = async() => {
  try {
    const respuesta = await reuna();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}
planearReunion();

// reuna()
//   .then((rpta) => {
//     console.log(rpta);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("3");
console.log("4");
