const pikachu1 = {
  salud: 100,
  ataque: 50,
  defensa: 35
}
//Copia por referencia
const pikachu2 = pikachu1;

//pobre pikachu pelear, cambiando la propiedad de salud
pikachu2.salud = 70;

console.log("pikachu2", pikachu2);

console.log("pikachu1", pikachu1);

//LOS UNICOS TIPOS DE DATO QUE PODEMOS COPIAR DIRECTAMENTE, SON LOS PRIMITIVOS (STRING, NUMBER, BOOL, UNDEFINED, BIG INT, SYMBOL);
//Copía por Valor
const nota = 20;

let nota2 = nota;

nota2 = 17;

console.log("NOTA2", nota2);
console.log("NOTA", nota);
