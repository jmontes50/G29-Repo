//Estructuras repetitivas
/*
while(expresión a evaluar){
  y mientras esa expresion seá válida seguirá ejecutando el bloque de codigo entre sus {}
}
*/
let cantidadApps = 1;
// debugger;

while(cantidadApps < 15){
  console.log(`Puede instalar apps en su móvil ${cantidadApps}`);
  //actualizar el contador o la expresión para que en algún momento sea falsa y se detenga
  cantidadApps = cantidadApps + 1;
  // debugger;
  // cantidadApps++;
}
//cuando ya termina de ejecutarse,recién ejecuta las siguiente lineas
console.log("Ya no puede instalar Apps");
