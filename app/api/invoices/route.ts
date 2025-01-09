
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET(){
    const invoices = await prisma.invoice.findMany();
    return Response.json(invoices);
}

