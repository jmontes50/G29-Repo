let productos = [
  { id: 1, nombre: "Laptop", precio: 3500, stock: 12 },
  { id: 2, nombre: "Mouse inalámbrico", precio: 80, stock: 50 },
  { id: 3, nombre: "Teclado mecánico", precio: 250, stock: 20 },
  { id: 4, nombre: "Monitor 24''", precio: 700, stock: 15 },
  { id: 5, nombre: "Disco SSD 1TB", precio: 450, stock: 8 }
];

console.table(productos);

//Armar un carrito de compras en base a un presupuesto
let carrito = [];

let presupuesto = Number(prompt("Cuanto presupuesto tiene"));

for(let i = 0; i < productos.length; i++){
  let confirmar = confirm(`
    Ud está viendo el producto
    ${productos[i]. nombre}
    Desea comprarlo?
  `)
  if(confirmar === true){
    carrito.push(productos[i])
  }
}

console.table(carrito);
