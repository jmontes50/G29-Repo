/**
 * for(inicializador; límite; actualizador) {
 *  lo que queramos ejecutar
 * }
 */

//apps++ <---------> apps = apps + 1, es lo mismo
// for(let apps = 0; apps <= 10; apps++){
for(let apps = 0; apps <= 10; apps+= 2){
  console.log(`Instalando app: ${apps}`);
}

console.log("Ya no tiene espacio");
