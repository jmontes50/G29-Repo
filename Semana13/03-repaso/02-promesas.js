console.log("1");
console.log("2");
console.log("dejame confirmar");

const reuna = () => {
  return new Promise((resolve, reject) => {
    //va la parte asíncrona
    setTimeout(() => {
      let error = true;
      if (error) {
        reject("✖️ No se puede");
      } else {
        resolve("👍 Ya confirme el Sab/27 sale!");
      }
    }, 4000);
  });
};

reuna()
.then((rpta) => {
  console.log(rpta);
})
.catch((err) => {
  console.log(err)
})


console.log("3");
console.log("4");

