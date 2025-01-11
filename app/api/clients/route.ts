// import client from '@/Jsons/client.json'
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface user {
    cardNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    admissionDate: string;
    imgUrl: string;
    address: string;
    contact: number;
    gender: string;
    isMarried: boolean;
}

export async function GET(){
    // return Response.json(client)
    const users = await prisma.members.findMany()

    return Response.json(users)
}

export async function POST(req: NextRequest){
    try{
        const userRequest:user = await req.json();
        console.log("post start for: ", userRequest );
        const { cardNo, firstName, middleName, lastName, dob, admissionDate, imgUrl, address, contact, gender, isMarried } = userRequest;
        const res = await prisma.members.create({
            data:{
                Firstname: firstName,
                Middlename: middleName,
                Lastname: lastName,
                Address: address,
                Contact: contact,
                DoB: dob,
                Gender: gender,
                Mstat: isMarried,
                Avatar: imgUrl,
                admissionDate: admissionDate,
                cardNumber: cardNo
            }
        })
        return Response.json(res, { status: 201 });
    }catch (e) {
        console.error(' Error creating hardcoded member:',e);
        return Response.json(
            { error: 'Internal Server Error' }, 
            { status: 500 }
        );
    }
}

