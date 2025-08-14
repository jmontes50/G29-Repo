let frutas = ["Kiwi", "Naranja", "Piña", "Mango"];

//findIndex busca un item en un arr, y retorna su posición/índice al encontrarlo
//de no encontrarlo retorna -1
let posicion = frutas.findIndex(function(item) {
  return item === "Piña"; // 2
  // return item === "Durazno"; // -1
})

console.log("Find Index:", posicion)

let bebidas = [
  { nombre: "Cocacola", precio: 3 },
  { nombre: "Agua Yura", precio: 2.5 },
  { nombre: "Inka Cola", precio: 3 },
]

//find busca un item en un arr, si lo encuentra lo retorna, si no da undefined
let encontrado = bebidas.find(function(item) {
  // return item.nombre === "Inka Cola";
  return item.precio === 2.5;
})

console.log("Find:", encontrado);
