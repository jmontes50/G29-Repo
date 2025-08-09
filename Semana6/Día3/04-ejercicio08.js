/*
Crea una función que encuentre el número más grande en un array de números enteros. La función debe recibir el array como parámetro y devolver el valor máximo encontrado.

Puedes utilizar un bucle for para recorrer el array y comparar cada elemento.
Considera inicializar una variable con el primer elemento del array como valor máximo inicial.
*/

function encontrarMayor (arrNumeros) {
  let maximo = arrNumeros[0]; //
  // debugger;

  //siempre el último item es length -1 x eso i < arr.length
  for(let i = 1; i < arrNumeros.length; i++){
    // debugger;
    //i comenzara desde el index/posición 1 para comparar con máximo que es el 1er valor
    if(arrNumeros[i] > maximo) {
      // debugger;
      maximo = arrNumeros[i];
    }
  }
  return maximo;
}
console.log(encontrarMayor([3, 1, 4, -2, 5, 0]));
