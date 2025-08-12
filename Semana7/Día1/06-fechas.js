let hoy = new Date();

console.log(hoy);

let navidad = new Date("2025-12-25");
console.log(navidad);

console.log(hoy.getFullYear());

console.log(hoy.getMonth()); //JS cuenta los meses desde 0
console.log("navidadMes", navidad.getMonth());

console.log(hoy.getDate());

console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());

//timestamp, esta en milisegundos contando desde el 01/01/1970
console.log(hoy.getTime());
console.log(navidad.getTime());

let timestampHoy = hoy.getTime();
let timestampNavidad = navidad.getTime();

let hasNavidadMS = timestampNavidad - timestampHoy;

console.log(hasNavidadMS);

//milisegundos -> segundos -> minutos -> horas -> dias
let tiempoHastaNavidad = hasNavidadMS / 1000 / 60 / 60 / 24;
console.log(tiempoHastaNavidad)
