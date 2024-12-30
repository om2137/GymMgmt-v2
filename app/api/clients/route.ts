import client from '@/Jsons/client.json'
export async function GET(){
    return Response.json(client)
}