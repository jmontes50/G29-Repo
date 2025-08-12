/**
 * Desarrolla una función que reorganice un array de tres números enteros. La función debe mover el primer número al final, mantener el segundo en su posición y colocar el tercero al principio. Debe retornar el array resultante.
Ejemplo de entrada y salida: Entrada: [3, 2, 1]  Salida: [1, 2, 3]
Considera utilizar pop, push, shift, unshift

 */

function reorganizarArray(arreglo){
  console.log("arreglo original", arreglo);
  let primero = arreglo[0];
  let ultimo = arreglo[arreglo.length - 1]; //siempre el último item es .length - 1;

  // console.log(primero, ultimo)
  arreglo.pop();
  console.log("después del pop", arreglo);
  arreglo.shift();
  console.log("después del shift", arreglo);
  arreglo.push(primero);
  console.log("después del push", arreglo);
  arreglo.unshift(ultimo);
  console.log("después del un shift", arreglo);
}

reorganizarArray([4, 5, 6]);
reorganizarArray([1, 2, 3]);
reorganizarArray([10, 20, 30]);
