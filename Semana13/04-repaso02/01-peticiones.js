fetch("https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos", {
  method: "GET",
})
  .then((respuesta) => {
    console.log(respuesta); //guía de remisión, headers, status
    return respuesta.json();
  })
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.log(error);
  });

const hacerPeticion = async () => {
  try {
    const respuesta = await fetch(
      "https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos",
      {
        method: "GET",
      }
    );
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};
// hacerPeticion()

const actualizarConPeticion = async (id = 1, productoEditado) => {
  const objActualizado = {
    producto_nombre: "Camiseta playera",
    producto_precio: 90,
    producto_descripcion: "Camiseta temporada verano",
    producto_imagen: "https://i5.walmartimages.com/asr/6d51fbfb-40f1-4d82-8f5a-7c4a8095623f.480491f49bf354bd808c08f80b81f701.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  }

  try {
    const respuesta = await fetch(
      // "https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos/8",
      `https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos/${id}`,
      {
        method: "PUT",
        headers: {
        //aquí agregamos los headers
        'Content-Type': 'application/json' //cabecera de contenido
        },
        body: JSON.stringify(objActualizado)
      }
    );
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};
actualizarConPeticion()
