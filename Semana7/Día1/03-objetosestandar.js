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

console.log(gato.nombre);
console.log(gato["edad"])
//métodos, son funciones que están metidas en un objeto
gato.salir();
gato.dormir();
