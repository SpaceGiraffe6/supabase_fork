import { insertUser, insertEvent} from "@/utils/supabase/client";
import { userLogin } from "@/utils/supabase/server";
export default async function page(){

        //  insertEvent("mafia-meeting",["2025-02-27"],"[3,5]").then(obj=>console.log(obj));
        //  insertUser("bum", "duck123@gmail.com", "freak", 3, "owner");
        userLogin("bob","joe@gmail.com").then(obj=>console.log(obj));

   
    return(<>
        <p>gang</p>
    </>)
}