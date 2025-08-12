let serie = {
  nombre: "Si la vida te da mandarinas",
  creador: "Kim won-seok",
  elenco: ["IU", "Park Bo-gum", "Moon So-ri"],
  episodios: [
    { titulo: "Summer in a Heartbeat", emision: "7/03/25", puntaje: 8.5 },
    { titulo: "Sassy First Love", emision: "7/03/2025", puntaje: 8.5 },
    { titulo: "Yesterday was yout spring", emision: "7/03/2025", puntaje: 9 },
  ],
  escritores: {
    principal: "Im Sang-choon",
    asistente: "Lim Sang-Chung",
    supervisor: "Kim Won-seok"
  },
  opiniones: [
    {
      usuario: "mhStella",
      valoracion: 10,
      etiquetas: ["Emocionante", "Dramático", "Nostálgico"]
    }
  ]
};
//a una propiedad con . o con ["propiedad"] ej: gato.color
//a un item de un array con [#] ej: arr[0]
console.log(serie.nombre);
console.log(serie.elenco[0]);
console.log(serie.episodios[2].puntaje);
console.log(serie.opiniones[0].etiquetas[1]);
