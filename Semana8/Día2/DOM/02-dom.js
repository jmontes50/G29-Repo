console.log("DOCUMENT:", document);

//Selectores de JS
const Titulo_elemento = document.getElementById("titulo");

//... lo que obtenemos es 01 Elemento HTML, objeto Element
console.log(Titulo_elemento);

Titulo_elemento.style.color = "red";

console.log("Vemos su HTML interno:", Titulo_elemento.innerHTML);

//El querySelectorAll y querySelector, funciona como un selector de CSS por ejemplo para class="parrafo" es ...
const elementos_p = document.querySelectorAll(".parrafo");
//todos los selectores de CSS
// const elementos_p = document.querySelectorAll("p");

console.log("Elementos párrafo:",elementos_p);

//Los Nodelist obtenenidos por querySelectorAll podemos tratarlos como Arreglos
elementos_p.forEach(function(item){
  console.log(item);
  //.style me permite acceder a cualquier propiedad de css
  item.style.color = "blue";
  item.style.fontWeight = "bold";
})
