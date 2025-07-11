import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.DATABASE_URL
const supabaseKey = process.env.DATABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function getInfos(nom,email)
{
  let { data, error } = await supabase
  .from('Mini_Projet_Petit_Pas')
  .select()
  .eq('nom',nom)
  .eq('email',email)

  return {data,error}
}

async function addInfos(nom,email) {
  

    const { data, error } = await supabase
    .from('Mini_Projet_Petit_Pas')
    .insert([
      { "nom": nom, "email": email },
    ])
    .select()
    return { data, error }

}

export {getInfos,addInfos}