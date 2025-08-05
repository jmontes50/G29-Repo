let mes = prompt("Ingrese el mes de forma númerica");
let mesNumber = Number(mes); //1 , 2, 3  ... 12
// if(expresion_evaluar) {}
/*
switch(expresion_evaluar) {
  case "casos":
    codigo a ejecutar
}
*/
/*
*
switch (mesNumber) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  //al final para los casos que no podamos cubrir
  default: //default -> por defecto //else
    console.log("El valor ingresado es incorrecto");
}
*/

switch (true) {
  case 1 <= mesNumber && 3 >= mesNumber:
    console.log("Verano");
    break;
  case 4 <= mesNumber && 6 >= mesNumber:
    console.log("Otoño");
    break;
  case 7 <= mesNumber && 9 >= mesNumber:
    console.log("Invierno");
    break;
  case 10 <= mesNumber && 12 >= mesNumber:
    console.log("Otoño");
    break;
  default:
    console.log("El valor no es válido");
}

// console.log(typeof (1 < mesNumber))
