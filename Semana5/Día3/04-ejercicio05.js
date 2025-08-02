/*
Desarrolla un programa que determine el
monto equitativo a pagar por cada uno de
los 3 amigos después de salir a comer.
El programa solicitará el monto total a pagar
y calculará cuánto debe pagar cada amigo
para que todos contribuyan por igual.
Luego, mostrará el resultado mediante
una alerta o un console.log.
*/
let total = prompt("Cuál fue el monto consumido?");
//El operador ! de negación invierte una expresión booleana
//si total es "diez" -> isNaN me dará: true
// console.log(isNaN(total));
//Si !isNaN("diez") me va a dar false

/*
if(!isNaN(total)){
  let totalNumber = Number(total);
  let montoPorPersona = totalNumber / 3;
  alert(`El monto a pagar equitativo por c/u es: ${montoPorPersona}`);
} else {
  console.log("Ingrese un valor válido");
}
*/

/*
//versión normal
if(isNaN(total)){
  console.log("Ingrese un valor válido");
} else {
  let totalNumber = Number(total);
  let montoPorPersona = totalNumber / 3;
  alert(`El monto a pagar equitativo por c/u es: ${montoPorPersona}`);
}
*/


//versión evaluando si es positivo
debugger;
let esNumero = !isNaN(total);
debugger;
let esPositivo = total >= 0;
debugger;
if( esNumero && esPositivo){
  debugger;
  let totalNumber = Number(total);
  debugger;
  let montoPorPersona = totalNumber / 3;
  alert(`El monto a pagar equitativo por c/u es: ${montoPorPersona}`);
} else {
  console.log("Ingrese un valor válido");
}

