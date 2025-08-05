//Estructuras repetitivas
/*
while(expresión a evaluar){
  y mientras esa expresion seá válida seguirá ejecutando el bloque de codigo entre sus {}
}
*/

/*
let cantidadApps = 1;
// debugger;

while(cantidadApps < 15){
  //template literal
  console.log(`Puede instalar apps en su móvil ${cantidadApps}`);
  //actualizar el contador o la expresión para que en algún momento sea falsa y se detenga
  cantidadApps = cantidadApps + 1;
  // debugger;
  // cantidadApps++;
}
//cuando ya termina de ejecutarse,recién ejecuta las siguiente lineas
console.log("Ya no puede instalar Apps");
*/

//Do-while

/*
do {
  código a ejecutar al menos una vez
} while (expresión a evaluar para seguir ejecutando el bloque)
*/

let tienePermisos = false;

do {
  console.log(`Evaluando al incio tienePermisos: ${tienePermisos}`);
  tienePermisos = confirm("El usuario tiene permisos?")
  console.log(`Observando el valor de tienePermisos: ${tienePermisos}`);
} while (tienePermisos === true);

console.log("Fin de script", tienePermisos);
