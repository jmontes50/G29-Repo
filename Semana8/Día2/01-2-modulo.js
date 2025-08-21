const MAS_IGV = 1.17;

const saludar = (nombre) => {
  return `Hola soy ${nombre}`
}

const lista = ["Ceviche", "Ají de gallina", "anticuchos"];

//SOLAMENTE PUEDO TENER 01 DEFAULT
export default lista;

//tenemos que indicar que estamos exportando
export {
  MAS_IGV,
  saludar
}
