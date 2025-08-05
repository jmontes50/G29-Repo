// let alumno1 = "Alexys";
// let alumno2 = "Antonio";
// let alumno3 = "Braulio";
//...
//Array - Arreglo
// let alumnos = ["Alexys", "Antonio", "Braulio", "Bryan", "Carlos", "Cesar", "Cielo"]
let alumnos = [
  "Alexys",
  "Antonio",
  "Braulio",
  "Bryan",
  "Carlos",
  "Cesar",
  "Cielo",
  "Eduardo",
  "Franco",
]; //si el código crece mucho a la der, alt + shift + f

console.log(alumnos);
//TODO Array va a tener es un índice, index o posición Y SIEMPRE desde 0

console.log(alumnos[5]);
console.log(alumnos[3]);
console.log(alumnos[2]);

//Longitud me indica la cantidad de items en el array, no cuenta desde 0, es la cantidad directamente
console.log(alumnos.length);

//
console.log("viendo item al final:", alumnos[alumnos.length - 1]);

//No tiene que guardar necesariamente el mismo tipo de dato 😺😺😺
let items = ["Gabriel", 100, true, undefined, ["foo", "bar"]];
console.log("dentro de items", items[1]);

// let matriz = [[4,5,6], [7,8,9], [10,11,12]]
let matriz = [
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

console.log(matriz[1]);

//matriz[numero] hace referencia a un items que es un array dentro de otro
//matriz[numero][numero] hace referencia a un item dentro del array dentro del otro array
console.log(matriz[1][2]);
