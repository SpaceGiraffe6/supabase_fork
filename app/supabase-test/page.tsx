import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.from("Users").select("*");
  console.log(typeof data);
  console.log(data);
  console.log(typeof error);
  console.log(error);

  return (
    <>
      
    </>
  )
}
