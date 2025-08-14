//VAR no se utiliza, no es SEGURO

// var a = 10;

// var a = 200;

// console.log(a);

let a = 10;

// let a = 200; //No puede redeclararlo
a = 120000000

console.log(a);

const IGV = 0.18; //No es fácil cambiarlo, por decir que no se puede

// IGV = 0.15; //No podemos reasignarlo

console.log(IGV); //Podemos referenciarlo

const haceSol = confirm("Esta soleado hoy?");

//Para expresiones que ya den un booleano No es necesario compararlas con un true o false
// console.log(haceSol === true)
// console.log(haceSol)
// if(haceSol){
//   //etc etc etc
// }

//Operador ternario
// expresión_A_evaluar ? Si es verdadero : si es falso
const consejo = haceSol === true ? "Si es V: Usa bloqueador" : "Si es F: Ponte abrigo";
console.log(consejo);
