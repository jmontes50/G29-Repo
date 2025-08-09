function saludar () {
  //podemos poner todas las instrucciones y código que deseemos
  console.log("Hola!!!");
  console.log("Mundo!!!!!!");
}

saludar(); //ejecución/invocación de la función con ()

console.log("referencia función: ", saludar);
// console.log("ejecución/invocación de la función: ", saludar());

//parámetros, como una declaración de variables
function suma(num1, num2){
  // console.log(num1 + num2);
  let resSuma = num1 + num2;
  return resSuma; //retornando la expresión con el resultado
}

let resultado = suma(10, 20); //argumentos, valores de los parámetros

console.log("resultado", resultado);
