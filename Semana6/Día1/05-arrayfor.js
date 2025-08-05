let frutas = ["Kiwi", "Naranja", "Mango", "Manzana"];

console.log("Longitud:", frutas.length); //la longitud, cantidad de elementos en array, ej: 4
console.log("Item individual por índice:", frutas[2]) //Mango

/*
//Con un for recorrer el arreglo
for (let i = 0; i < frutas.length; i++){
  console.log("inicializador",i);
  console.log(frutas[i])
}
*/

//string como arreglo
let palabra = "hipopotamo";

console.log("Letra:", palabra[4]); //demostrativa para recordar que podemos acceder a un item, en este caso a una letra

let cantidadLetraO = 0;

for(let i = 0; i < palabra.length; i++){
  // console.log(palabra[i]);
  console.log(palabra[i])
  if(palabra[i] === "o"){
    //si encontramos una o, la contamos
    console.log("EUREKA")
    cantidadLetraO++
  }
}

console.log(cantidadLetraO);
