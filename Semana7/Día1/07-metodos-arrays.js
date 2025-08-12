//item, cada item del array de forma individual
let frutas = ["Kiwi", "Naranja", "Piña", "Fresas"];

console.log(frutas)

//para algo similar como el for que lo haga repetidamente
//forEach, va a recibir una función a ejecutar por cada item que encuentre en el array
// arr.forEach(function(valor, i){})
frutas.forEach(function(dato, indice, array) {
  console.log(indice, dato, array);
}) //99%

//imperativo
// for(let i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
// }

//Transformar
let frutasMayusculas = frutas.map(function(dato, index) {
  //es obligatorio retornar la expresión donde este transformado el item/dato
  return `${index} - ${dato.toUpperCase()}`
})

console.log(frutasMayusculas);

// let newFrutas = [];
// for(let i = 0; i < frutas.length; i++){
//   newFrutas.push(`${i} - ${frutas[i].toUpperCase()}`)
// }
// console.log(newFrutas)


//las frutas que tengan una i
let frutasSinA = frutas.filter(function(dato) {
  //filter me pide retornar una expresión que de V o F
  return dato.includes("i"); //booleano
})

console.log(frutasSinA);
