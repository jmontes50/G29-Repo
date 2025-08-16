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

const notas = [10, 15, 13, 17, 19, 12, 11, 16];

//13 para arriba
// const aprobados = notas.filter((nota) => {
//   return nota >= 13;
// })
const aprobados = notas.filter((nota) => nota >= 13);

console.log("aprobados", aprobados)

//-----------PARÁMETROS POR DEFECTO------------
// const sumar = (a = 1, b = 2) => {
//   console.log("A:",a);
//   console.log("B:",b);
//   return a + b;
// }

function sumar(a = 1, b = 2) {
  console.log("A:",a);
  console.log("B:",b);
  return a + b;
}

console.log(sumar());

console.log(sumar(100, 50));

//DESESTRUCTURACIÓN APLICADA A PARÁMETROS DE FUNCIONES
const matricular = ({ nombres, apellidos, edad, dni, telefono }) => {
  //sentencia 1...
  //sentencia 2...
  //sentencia 3...
  console.log(`El estudiante ${nombres} ${apellidos} con dni ${dni} se matriculó`);
}

// matricular("montesinos", "jorge", 78901234, 30, 98978786578);
const estudiante = {
  apellidos: "Montesinos",
  dni: 901234567,
  edad: 35,
  telefono: 1234565677,
  nombres: "Jorge",
}

matricular(estudiante)
