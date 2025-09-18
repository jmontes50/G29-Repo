console.log("1");

console.log("2");

//alert, prompt, confirm
// alert("dejame confirmar");
console.log("dejame confirmar");

// const reuna = (texto) => {
//   setTimeout(() => {
//     console.log("Ya confirme, Sab/27 sale")
//     console.log(texto)
//   }, 4000)
// }

// reuna("chevere nos vemos");

const reuna = (plan) => {
  setTimeout(() => {
    // console.log("Ya confirme, Sab/27 sale")
    //plan(msje_confirmacion, error)
    // plan("", true)
    plan("Ya confirme, Sab/27 sale", false)
  }, 4000)
}

reuna((mensaje, error) => {
  if(error){
    console.log("No te preocupes, ya vemos")
  } else {
    console.log(mensaje)
    console.log("hay que invitar a X persona");
    console.log("Hay que comprar comida");
    console.log("Que juegos de mesa conseguimos");
    console.log("En donde nos juntamos")
  }
})


console.log("3");

console.log("4");

//--------
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  console.log("Holaaa me clickeaste!!!!")
})
