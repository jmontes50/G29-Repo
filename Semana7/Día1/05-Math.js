console.log("Num. PI", Math.PI);

console.log("Num. Euler", Math.E);

console.log("Raíz cuadrada", Math.sqrt(64));

let nota = 18.5;

console.log("Redondear", Math.round(nota));

nota = 18.1;

console.log("Ceil, redondear al núm cercano superior", Math.ceil(nota));

nota = 18.9;

console.log("floor, redonde al núm inferior", Math.floor(nota));

let aleatorio = Math.random(); //num aleatorio entre 0 y 1

console.log("Aleatorio", aleatorio);

//Caso práctico
let color1 = Math.floor(Math.random() * 256);
let color2 = Math.floor(Math.random() * 256);
let color3 = Math.floor(Math.random() * 256);

console.log("RGB", `rgb(${color1}, ${color2}, ${color3})`);
