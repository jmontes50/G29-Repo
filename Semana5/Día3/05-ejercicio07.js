/**
 * Desarrolla un programa que solicite dos cadenas de texto (strings), 'a' y 'b', y muestre una nueva cadena combinando ambas de la siguiente manera: corta + larga + corta. La cadena más corta estará en el exterior y la más larga en el interior.
Por ejemplo, si las cadenas son "bye" y "adios", el resultado sería "byeadiosbye".
 */

// a = bye , b = adios --> a + b + a
// a = hipopotamo , b = pato --> b + a + b

let a = prompt("Ingrese la primera palabra");
let b = prompt("Ingrese la segunda palabra");

let longitudA = a.length;
let longitudB = b.length;

// a=cuy b=alpaca
if (longitudA < longitudB) {
  console.log(a + b + a);
} else {
  console.log(`${b}${a}${b}`);
}
