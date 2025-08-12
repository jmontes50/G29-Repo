let gato = {
  nombre: "Tóxico",
  edad: 3,
  //porque tenemos 02 maneras para escribir métodos
  salir: function () {
    console.log("Sale y regresa oliendo feo");
  },
  dormir() {
    console.log("ZZZZZZZZZZZZZZ")
  }
}
/*
console.log(gato.nombre);
console.log(gato["edad"])
//métodos, son funciones que están metidas en un objeto
gato.salir();
gato.dormir();
*/
let texto = "Gato";
console.log(texto.length);
console.log(texto.toUpperCase());

console.log(typeof texto);

let texto2 = new String("Perro"); //no es recomendada, estamos usando un constructor
console.log(texto2)
console.log(texto2.toUpperCase());

let arr = ["Azul", "Blanco"]
console.log(arr)
