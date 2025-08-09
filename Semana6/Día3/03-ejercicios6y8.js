/**
 * Crea una función que cuente la cantidad de números pares en un array de números. La función debe recibir el array como parámetro y devolver el total de números pares encontrados.
 */

function contarPares (arrayNumeros) {
  let cantidadPares = 0;
  //todo array comienza en 0
  //for( inicializador; límite; actualizador)
  for(let i = 0; i < arrayNumeros.length; i++){
    // console.log(i);
    // console.log(arrayNumeros[i]); //arrayNumeros[0]
    if(arrayNumeros[i] % 2 === 0){ //si es par
      // console.log(`${arrayNumeros[i]} es par!`);
      // cantidadPares = cantidadPares + 1; // es lo mismo que:
      cantidadPares++;
      // debugger;
      // console.log(cantidadPares)
    }
  }
  return cantidadPares;
}

let resultadoContarPares = contarPares([10, 25, 30, 45, 50]);
console.log(resultadoContarPares);
//--------------------------------------------------------

function contarPares2do (arrayNumeros) {
  let arregloPares = []; //es un arreglo vacio sin items
  //todo array comienza en 0
  //for( inicializador; límite; actualizador)
  for(let i = 0; i < arrayNumeros.length; i++){
    // console.log(i);
    // console.log(arrayNumeros[i]); //arrayNumeros[0]
    if(arrayNumeros[i] % 2 === 0){ //si es par
      // console.log(`${arrayNumeros[i]} es par!`);
      arregloPares.push(arrayNumeros[i])
    }
  }
  // console.log(arregloPares)
  return arregloPares.length;
}

let resultadoContarPares2do = contarPares2do([10, 25, 30, 45, 50]);
console.log(resultadoContarPares2do)

//El 8 esta en el siguiente archivo
