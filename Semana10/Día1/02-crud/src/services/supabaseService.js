import { supabase } from "../config/supabaseConfig";
import { v4 as uuidv4 } from "uuid";

const BUCKET_NAME = "products_bucket";

const uploadFile = async (newFile) => {
  //newFile tiene una propiedad name ej. Foto.png
  try {
    const originalName = newFile.name.split("."); //separamos el nombre de la extensión
    const extension = originalName[originalName.length - 1];

    const newName = uuidv4(); //nos deberia dar un nombre alfanúmerico '423hsdfsd-3244fg43-fdgsd23'
    console.log({ newName });
    const newNameWithExtension = `${newName}.${extension}`; //'423hsdfsd-3244fg43-fdgsd23.jpg'

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME) //en from va el nombre del bucket
      .upload(newNameWithExtension, newFile);
    if (error) {
      throw new Error(error);
    }
    // console.log(data);
    //data tiene una propiedad path que es necesaria para b uscar y retornar la url pública
    const filePublicUrl = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(data.path);
    return filePublicUrl;
  } catch (error) {
    console.log(error);
  }
};

export { uploadFile };
