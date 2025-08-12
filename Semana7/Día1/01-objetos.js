let gato = {
  //Podemos pensar en c/propiedad como una variable, podemos almacenar cualquier cosa
  //por cada propiedad la separaremos de la otra con una coma ,
  nombre: "Gumball",
  color: "Naranja",
  edad: 4,
  esAmigable: true,
  dormir: function (){
    console.log("ZZZZZZZ")
  },
  jugar() {
    console.log("Persigue persigue pelota")
  }
}

console.log(gato);
console.table(gato);

//notación de punto, la más común: nombreObjeto.nombrePropiedad
console.log(gato.nombre);
console.log(gato.edad)

//bracket notation [], permite dar como str el nombre de una propiedad
let nombrePropiedad = "color";
console.log(gato[nombrePropiedad]);

//desestructuración, si tu conoces un objeto puedes desestructurar sus propiedades
let { esAmigable, nombre, edad, color } = gato; //crear nuevas variables
console.log(esAmigable, nombre, color, edad);
