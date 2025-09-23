//fetch o axios, son maneras de hacer Peticiones(requests)
//Y las peticiones es una manera que se comunican aplicaciones entre ellas, sobretodo por redes (LAN, Internet)
//suelen requerir la URL de la API que hara llegar nuestra petición
// y a veces especificamente en la URL un id
//y a veces en el body un JSON con lo que se desee enviar
//tanto fetch y axios usan promesas, ya que estamos hablando de hacer una comunicación con algo que probablamente este en un distancia lejana o una operación que demore en el backend

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
