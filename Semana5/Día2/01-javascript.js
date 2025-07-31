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
