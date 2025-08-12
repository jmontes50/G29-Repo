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
