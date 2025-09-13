import { createClient } from '@supabase/supabase-js'


// Create a single supabase client for interacting with your database
//encuentra la URL en Project Settings -> DATA Api -> url
//la api key tiene que ser creada en Project Settings -> API KEYS -> api key
const publicApiKey = import.meta.env.VITE_APIKEY_SUPABASE;
console.log({ publicApiKey });
const supabase = createClient('https://kwpikywfqltyhrzlidyf.supabase.co', publicApiKey);

export {
  supabase
}
