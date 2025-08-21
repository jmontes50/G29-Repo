console.log("DOCUMENT:", document);

//Selectores de JS
const Titulo_elemento = document.getElementById("titulo");

//... lo que obtenemos es un Elemento HTML, objeto Element
console.log(Titulo_elemento);

Titulo_elemento.style.color = "red";

console.log("Vemos su HTML interno:", Titulo_elemento.innerHTML);
