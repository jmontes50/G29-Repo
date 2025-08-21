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
//También existe el document.getElementsByClassName(".parrafos")
//Pero no te da un Array

console.log("Elementos párrafo:",elementos_p);

//Los Nodelist obtenenidos por querySelectorAll podemos tratarlos como Arreglos
elementos_p.forEach(function(item){
  console.log(item);
  //.style me permite acceder a cualquier propiedad de css
  item.style.color = "blue";
  //font-weight: bold; ---> camelCase ---> fontWeight
  item.style.fontWeight = "bold";
})

//si es 01 solo elemento, también..
const inputText = document.querySelector("#input-texto");

console.log("input texto:", inputText);

console.log(inputText.getAttribute("type"));
