//porque window no es necesario llamarlo explicitamente pero esta ahí
window.console.log("Hola!!!!");

//ubicacion aproximada
// if(window.navigator.geolocation) {
if(navigator.geolocation) {
  //Window lo que trae son una API's, Application Programming Interface.
  //navigator es un objeto para toda la parte de ubicación y navegación
  navigator.geolocation.getCurrentPosition(function(ubicacion) {
    console.log(ubicacion);
  })
}
