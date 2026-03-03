import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://yxgxbbigeiotgmfztxnx.supabase.co";
const supabasePublishableKey = "sb_publishable_alCneJXAQDOSTmWQQlztow_aT4rgBae";
const supabase = createClient(supabaseUrl, supabasePublishableKey);

export interface Userdata {
    name?: string;
    email?: string;
    password?: string;
    eventId?: number;
}
export async function fetchLoginInfo(email: string): Promise<Userdata> {
    let {data, error} = await supabase.from("userslogin").select().eq("email", email);
    
    let userinfo: Userdata = {name: "", email: "", password: "", eventId: -1}
    if (!error) {
        if (data && data[0]) {
            let {name, email, password, event_id_ref: eventId} = data[0]
            return {name, email, password, eventId};
        }
    }
    else {
        console.error(`Failed to fetch data for user ${email} (${error})`);
    }
    
    return userinfo;
}

export interface EventData {
    eventId: number;
    title: string;
    dates: Array<string>;
    time: any;
}
export async function fetchEvent(eventId: number): Promise<any> {
    let {data, error} = await supabase.from("events").select().eq("event_id", eventId);
    if (data && data[0]) {
        let {event_id: eventId, title, dates, timerange: time} = data[0];
        return {eventId, title, dates, time};
    }
}
