let ingredientes = ["Limón","Maíz","Camote"];

console.log(ingredientes);
console.log("---------------------")

//agrega a la parte final un nuevo item
ingredientes.push("bonito");

console.log("PUSH:", ingredientes);

ingredientes.unshift("Cebolla");

//agrega un item al inicio del array

console.log("UNSHIFT:", ingredientes);
console.log(ingredientes[0]);

//Remueve/elimina el último item de un array
ingredientes.pop();
console.log("POP:", ingredientes);

//remuve/elimina el primer item de un array
ingredientes.shift();
ingredientes.shift();
console.log("SHIFT:", ingredientes);
