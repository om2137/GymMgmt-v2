
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface invoice{
    member_id: number;
    paidDate: Date;
    paidOn: Date;
    dueDate: Date;
    facility: string;
    fees: number;
    admFee: number;
    paymentType: string;
}

export async function GET(){
    const invoices = await prisma.invoice.findMany();
    return Response.json(invoices);
}

export async function POST(req: NextRequest){
    try{
    const invoice: invoice = await req.json();
    console.log("invoice post initiated:",invoice);
    const res = await prisma.invoice.create({
        data:{
            member_id: invoice.member_id,
            paidDate: invoice.paidDate,
            paidOn: invoice.paidOn,
            dueDate: invoice.dueDate,
            facility: invoice.facility,
            fees: invoice.fees,
            admFee: invoice.admFee,
            PaymentType: invoice.paymentType
        }
    });

    return Response.json(res, { status: 200 });
    }catch(e: unknown) {
        if (e instanceof Error) {
            console.error('Error creating member:', e.message);
        } else {
            console.error('Unexpected error:', e);
        }
        return Response.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
