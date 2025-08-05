/**
 * for(inicializador; límite; actualizador) {
 *  lo que queramos ejecutar
 * }
 */

//apps++ <---------> apps = apps + 1, es lo mismo
// for(let apps = 0; apps <= 10; apps++){
/*
for(let apps = 0; apps <= 10; apps+= 2){
  console.log(`Instalando app: ${apps}`);
}

console.log("Ya no tiene espacio");
*/

let limite = Number(prompt("Hasta que número deseas sumar?"));

let suma = 0;

for(let i = 0; i <= limite; i++) {
  suma = suma + i;
  // debugger;
  console.log(suma);
  // debugger;
  // suma+=i;
}

console.log(`La suma del 1 al ${limite} es ${suma}`);
