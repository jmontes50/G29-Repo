console.log("1");
console.log("2");
console.log("dejame confirmar");

const reuna = () => {
  return new Promise((resolve, reject) => {
    //va la parte asíncrona
    setTimeout(() => {
      let error = false;
      if (error) {
        reject("✖️ No se puede");
      } else {
        resolve("👍 Ya confirme el Sab/27 sale!");
      }
    }, 4000);
  });
};

const comprarPizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if(error){
        reject("No hay pizza, Comamos salchipapa!");
      }else{
        resolve("La pizza esta lista!");
      }
    }, 3000)
  })
}

const conseguirJuegosMesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if(error){
        reject("No hay juegos");
      }else{
        resolve("Consegui los gatitos explosivos!");
      }
    }, 3000)
  })
}

reuna()
.then((rpta) => { //este captura el resolve de reuna
  console.log(rpta);
  return comprarPizza()
})
.then((rpta2) => { //este sale solo si la 1ra promesa se cumplió
  console.log(rpta2)
  return conseguirJuegosMesa()
})
.then((rpta3) => {
  console.log(rpta3)
})
.catch((err) => { //este catch funciona para todas las demas promesas encadenadas más arriba
  console.log(err)
})


console.log("3");
console.log("4");

