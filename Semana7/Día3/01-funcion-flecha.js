// const saludar = function (nombre) {
//   console.log(`Hola soy ${nombre}`);
// }

//función flecha
//const nombreFunción = (params...) => {
//  return "Hola"
// }
const saludar = (nombre, apellidos) => {
  //sentencia 1
  //sentencia 2
  //sentencia 3 ...
  return `Hola soy ${nombre} ${apellidos}`
}

console.log(saludar("Jorge", "Montesinos"));

//SI es SOLO 01 PARÁMETRO, podemos quitar los paréntesis y dejar solo al parámetro
const descripcion = nombreProd => {
  return `Este producto ${nombreProd} esta disponible`;
}

console.log(descripcion("Luces Led"));

// const anadirDecimales = (numero) => {
//   //.toFixed es un método que añade decimales a un número y retorna un string con decimales
//   return numero.toFixed(2);
// }
const anadirDecimales = (numero) => numero.toFixed(2);


console.log(anadirDecimales(100));

