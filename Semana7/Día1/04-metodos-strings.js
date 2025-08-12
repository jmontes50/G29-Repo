let texto = "Uno no es lo que es por lo que escribe, sino por lo que ha leido - Jorge Luis Borges";
//"Hoy me gusta la vida mucho menos, pero siempre me gusta vivir"

let existe = texto.includes("-");

console.log(existe)

//split recibe un caracter como separador para convertir el texto aun array
let textoArr = texto.split(" ");

console.log(textoArr);

//Solamente queremos extraer el autor de un campo de texto

let tieneAutor = texto.includes("-"); //nos da un booleano

if(tieneAutor) {
  let separar = texto.split("-");
  console.log(separar);
  let autor = separar[1].trim();
  console.log(autor);
}

