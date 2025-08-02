let nota = 11;
console.log(nota > 12);
let comparacion = nota > 12;
console.log(typeof comparacion);
//dentro de los paréntesis va la expresión que se evalúa
//si la expresión es verdadera, se ejecuta el bloque de código dentro de las llaves
if (nota > 12) {
  console.log("Aprobado");
} else {
  //si la expresión es falsa, se ejecuta el bloque de código dentro del else
  console.log("Reprobado");
}
//---------------------------
//preguntar y recibir una respuesta del usuario, cuando obtenemos un dato del usuario, este es un string
let promptEdad = prompt("Ingrese su edad");
console.log("Tipo dato promptEdad", typeof promptEdad);
if (promptEdad >= 60) {
  console.log("Usted es un adulto mayor tiene dscto.");
}else{
  console.log("Puede acceder a otras promociones");
}
