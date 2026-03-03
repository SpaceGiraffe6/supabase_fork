
export async function POST(request:Request){
    
    let {name, email, password} = request.body;
    return new Response(JSON.stringify({username:name, userEmail:email, userPassword:password}), {status:200});
}