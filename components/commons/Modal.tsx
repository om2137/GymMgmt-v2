'use client'

import { Dispatch, SetStateAction } from "react";
import { Button } from "../Buttons/Button";

interface props{
    visibility: string;
    setVisibility:  Dispatch<SetStateAction<string>>;
    client?: {
        id: number;
        name: string;
        age: number;
        email: string;
        gender: string;
        address: string;
    };
    invoice?: {
        id: number;
        name: string;
        PaidOn: string;
        from: string; 
        to: string; 
        paymentType: string;
        totalfee: number;
    };
    setSelectedInvoice?: Dispatch<SetStateAction<number>>;
}

export function Modal({visibility, setVisibility, client }:props){

    return (
        <div className={`${visibility} w-[32rem] h-[26rem]`} >
            <div className={`w-full h-full relative flex justify-center items-center bg-cyan-800
             rounded-xl shadow shadow-cyan-400`}>
                <div className="flex flex-col p-2 m-2">
                    <span className="text-4xl font-semibold capitalize">hello, {client?.name}</span> 
                    <span className="text-2xl"></span>
                </div>
                
                <div className="absolute right-2 top-2">
                    <Button Name={"close"} onClick={() => setVisibility('hidden')} />
                </div>
                
            </div>
        </div>
    )
}

export function InvoiceModal({visibility, setVisibility, invoice, setSelectedInvoice }:props){

    return (
        <div className={`${visibility} w-[32rem] h-[26rem]`} >
            <div className={`w-full h-full relative flex justify-center items-center bg-cyan-800
             rounded-xl shadow shadow-cyan-400`}>
                <div className="flex flex-col p-2 m-2">
                    <span className="text-4xl font-semibold capitalize">hello, {invoice?.name}<br/> your invoice id: {invoice?.id}</span> 
                    <span className="text-2xl">your invoice is of Rs.{invoice?.totalfee}</span>
                    <span className="text-lg">payment type: {invoice?.paymentType} <br/> paidOn: {invoice?.PaidOn}</span>
                    <span className="text-lg">Subscription validity: {invoice?.from} - {invoice?.to}</span>
                </div>
                
                <div className="absolute right-2 top-2">
                    <Button Name={"close"} onClick={() => {setVisibility('hidden'); setSelectedInvoice?.(0);}} />
                </div>
                
            </div>
        </div>
    )
}