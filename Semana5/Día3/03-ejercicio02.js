let numero = prompt("Ingrese un número");
//isNaN verifica si el valor no es un número y me da un boolean
if(isNaN(numero)) {
  console.log("El valor ingresado no es un número válido.");
} else {
  //aquí ya es un número, parseFloat convierte el string a un número decimal
  let numeroConvertido = parseFloat(numero);
  if (numeroConvertido === 0){
    console.log("Es igual a 0");
  } else if (numeroConvertido < 0){
    console.log("Es negativo");
  } else {
    console.log("Es positivo");
  }
}
