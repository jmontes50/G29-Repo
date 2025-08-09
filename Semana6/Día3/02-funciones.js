function saludar () {
  //podemos poner todas las instrucciones y código que deseemos
  console.log("Hola!!!");
  console.log("Mundo!!!!!!");
}

saludar(); //ejecución/invocación de la función con ()

console.log("referencia función: ", saludar);
// console.log("ejecución/invocación de la función: ", saludar());

let resta = 0;

//parámetros, como una declaración de variables
function sumatoria(num1, num2){
  // console.log(num1 + num2);
  let result = num1 + num2;
  resta = num2 - num1;
  // console.log(result);
  // return num1 + num2;
  return result; //retornando la expresión con el resultado
}


let resultado = sumatoria(10, 20); //argumentos, valores de los parámetros

console.log("resultado", resultado);

console.log("Resta: ", resta);

//función pura
//Es una función que no es afectada por algo externo
function multiplicacion (a, b){
  return a * b;
}
console.log("Multiplicación:", multiplicacion(4, 7));
