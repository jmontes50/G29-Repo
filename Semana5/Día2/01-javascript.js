console.log("Hola, estudiantes!");
console.log("Bienvenidos a JavaScript.");

let edad = 30; // Número
console.log(edad);
console.log(typeof edad);

let primerNombre = "Juan"; //String
console.log(primerNombre);
console.log(typeof primerNombre);

let edad2 = '30'; //String
console.log(edad2);
console.log(typeof edad2);

let estaLloviendo = true; //Boolean true/false
console.log(estaLloviendo);
console.log(typeof estaLloviendo);

//js no tiene tipado estático, por lo que podemos cambiar el tipo de una variable
edad2 = 25; // Cambiando el valor de edad2 a un número
console.log(edad2);
console.log(typeof edad2);

//mediante la , separamos varios valores para imprimir
console.log("Este es un texto independiente", "este es otro", 123, true, false);

let noDefinido;
console.log("valor:", noDefinido);
console.log("tipo de dato", typeof noDefinido); //undefined

let nulo = null; //para que eventualmente se asigne un valor
console.log("valor:", nulo);
console.log("tipo de dato", typeof nulo); //object

//Expresión vs Sentencia
//Expresión es algo que se evalúa y devuelve un valor
//Sentencia es una instrucción que se ejecuta
console.log("Hola"); //Sentencia
let saludo = "Buenas tardes"; //Sentencia
console.log(100 + 5); //expresión, la parte del 100 + 5 se evalúa y devuelve un valor

//Operaciones aritméticas
console.log("Suma:", 10 + 5); // Suma
console.log("Resta:", 10 - 5); // Resta
console.log("Multiplicación", 10 * 5); // Multiplicación
console.log("División", 10 / 3); // División
console.log("Módulo", 10 % 3); // Módulo (residuo de la división)
// console.log(parseInt(10 / 3));

//concatenación, el + está siendo usado para unir strings
console.log("Hola" + " " + "Mundo"); // Concatenación de cadenas
//CUIDADO, si uno de los valores es un string, se convierte todo a string
console.log("Vamos a hacer una suma: ", "10" + 5);

// Template Strings, Template Literals
let nombreCompleto = "Juan Pérez";
console.log("Hola " + nombreCompleto + ", ¿cómo estás?"); // Concatenación tradicional no recomendada

console.log(`
  Hola ${nombreCompleto},
  ¿cómo estás?, Aquí tengo los ${10 + 20}
  que te debía.
`); // Usando template literals
