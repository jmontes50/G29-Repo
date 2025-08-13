/**
 * let gato = {
  nombre:"Michi"
}
//no es solo para leer
gato.nombre
//como una variable podemos reemplazarlo
gato.nombre = "Garfield"

//agregamos nuevas propiedades
gato.raza = "Angora"
gato.edad = 2

gato
 */

//Desarrollar un sistema que permita registrar nuevos productos, donde c/producto tendra un nombre, costo y stock
//la aplicación debe permitir agregar, listar los productos (prompt y confirm)
//CRUD  - Create Read Update Delete

let almacen = [{ nombre: "Agua", costo: 1.0, stock: 10 }];

let opcion = 0;
//0 working
//1 agregar
//2 listar
//3 salir

do {
  opcion = Number(prompt("Cuál es la opción a elegir"));
  console.log(opcion);

  if (opcion === 1) {
    let nuevoProducto = {};

    console.log(nuevoProducto);
    let nombreProducto = prompt("Ingrese el nombre del producto");
    let costoProducto = Number(prompt("Ingrese el costo del producto"));
    let stockProducto = Number(prompt("Ingrese el stock del producto"));
    //agregando una nueva propiedad, armando el objeto
    nuevoProducto.nombre = nombreProducto;
    nuevoProducto.costo = costoProducto;
    nuevoProducto.stock = stockProducto

    console.log(nuevoProducto);
  }
} while (opcion !== 3);
