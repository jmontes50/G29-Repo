//JS síncrono y concurrente

//1. Síncrono, solo puede ejecutar 01 sentencia/instrucción a la vez
console.log("1. Hola");

//2. Concurrente, Va a ver tareas que van a demorar pero siempre van a entrar al event loop
const ejecutar1 = (otraFuncion) => {
  setTimeout(() => {
    console.log("1.5 como están?");
    otraFuncion();
  }, 3000)
}

const xFuncion = () => {
  console.log("2. Estudiantes!!");
}

ejecutar1(xFuncion)


