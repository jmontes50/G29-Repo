const pikachu1 = {
  salud: 100,
  ataque: 50,
  defensa: 35
}
//Copia por referencia, no copia los valores, solo la dirección, como si apuntara a la misma dirección
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

//-----------SPREAD OPERATOR (Operador de esparcimiento)------------
const gato = {
  nombre: "Michi",
  color:"Naranja"
}
//El spread operator se simboliza con ...nombreRef
const gato2 = { ...gato }

gato2.color = "manchadito";
console.log("copiado con spread operator",gato2);

console.log("viendo gato original", gato);
