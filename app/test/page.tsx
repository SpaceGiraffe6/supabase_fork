import { insertUser, insertEvent} from "@/utils/supabase/client";
import { userLogin, createClient } from "@/utils/supabase/server";
import { create } from "domain";
import {cookies} from "next/headers";
export default async function page(){

        //  insertEvent("mafia-meeting",["2025-02-27"],"[3,5]").then(obj=>console.log(obj));
        //  insertUser("bum", "duck123@gmail.com", "freak", 3, "owner");
       // userLogin("bob","joe@gmail.com").then(obj => obj.json()).then(msg => console.log(msg));
    let cookieStore = await cookies();
    let server = await createClient(cookieStore);
    console.log(await server.from('userslogin').select("*"));
   
    return(<>
        <p>gang</p>
    </>)
}