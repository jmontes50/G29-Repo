import { supabase } from "../config/supabaseConfig";

const BUCKET_NAME = "products_bucket";

const uploadFile = async (newFile) => {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME) //en from va el nombre del bucket
      .upload("product1", newFile);
    console.log(data);
    if (error) {
      throw new Error(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  uploadFile
}
