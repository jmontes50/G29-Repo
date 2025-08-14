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
let encontrado = bebidas.find(function(item, indice, arreglo) {
  // return item.nombre === "Inka Cola";
  return item.precio === 2.5;
})

console.log("Find:", encontrado);

let edades = [27, 23, 18, 19, 50, 35, 34, 21];

// let ordenado = edades.sort(); //ordena la referencia original
let ordenado = edades.toSorted(); //no modifica la referencia original

console.log("Sort", ordenado);

console.log("edades", edades);

//reduce // Este método SI es diferente en como se usa
let sumaEdades = edades.reduce(function(acumulador, valorActual) {
  console.log(acumulador, "- ", valorActual);
  return acumulador + valorActual
})

console.log("Suma edades", sumaEdades);
