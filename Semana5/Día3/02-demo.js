//Calculemos el área de un triángulo
//b * h / 2
//Pensemos fuera del código, ¿qué necesitamos?
//1. comenzar por el esfuerzo sin una ayuda extra -> aprendizaje y porque a veces no es necesario una IA
//1.5 pedir una 2da opinión
//2. Plantearlo con una ayuda extra u opinión externa (IA)
let base = prompt("Ingrese la base del triángulo");
let altura = prompt("Ingrese la altura del triángulo");
console.log("Tipo dato base:", typeof base);
console.log("Tipo dato altura:", typeof altura);

//opcional pero recomendado
if (isNaN(base)) {
  console.log("Por favor ingrese un número válido para la base");
} else if (isNaN(altura)) {
  console.log("Por favor ingrese un número válido para la altura");
} else {
  //convertir el string a un número con Number
  let baseNumber = Number(base);
  let alturaNumber = Number(altura);
  let area = (baseNumber * alturaNumber) / 2;
  console.log("El área del triángulo es:", area);
}
