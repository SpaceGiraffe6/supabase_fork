export default function POST(request:Request){
    return new Response(JSON.stringify({name:"bob test"}),{status:201});
}