// import client from '@/Jsons/client.json'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(){
    // return Response.json(client)
    const users = await prisma.members.findMany()
    return Response.json(users)
}