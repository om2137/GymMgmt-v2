'use client'

import { Dispatch, SetStateAction } from "react";
import { Button } from "../Buttons/Button";

interface props {
    visibility: string;
    setVisibility: Dispatch<SetStateAction<string>>;
    client?: {
        id: number;
        Firstname: string;
        Lastname: string;
        address: string;
        contact: string;
        dob: Date;
        gender: string;
        IsMarried: boolean;
        admissionDate: string;
        cardNumber: string;
        balance: string;
    };
    invoice?: {
        id: number;
        member_id: number;
        paidDate: string;
        paidOn: string;
        dueDate: string;
        facility: string;
        fees: number;
        admFee: number;
        paymentType: string;
    };
    setSelectedInvoice?: Dispatch<SetStateAction<number>>;
}

export function Modal({ visibility, setVisibility, client }: props) {
    // console.log(client)
    return (
        <div className={`${visibility} w-[32rem] h-[26rem]`} >
            <div className={`w-full h-full relative flex justify-center items-center bg-cyan-800
             rounded-xl shadow shadow-cyan-400`}>
                <div className="flex flex-col p-2 m-2">
                    <span className="text-4xl font-semibold capitalize">hello, {client?.Firstname}</span>
                    <span className="text-2xl">{client?.IsMarried}</span>
                </div>

                <div className="absolute right-2 top-2">
                    <Button Name={"close"} onClick={() => setVisibility('hidden')} />
                </div>

            </div>
        </div>
    )
}

export function InvoiceModal({ visibility, setVisibility, invoice, setSelectedInvoice }: props) {

    return (
        <div className={`${visibility} w-[32rem] h-[26rem]`} >
            <div className={`w-full h-full relative flex justify-center items-center bg-cyan-800
             rounded-xl shadow shadow-cyan-400`}>
                <div className="flex flex-col p-2 m-2">
                    <span className="text-4xl font-semibold capitalize">hello, {invoice?.id}<br /> your invoice id: {invoice?.id}</span>
                    <span className="text-2xl">your invoice is of Rs.{invoice?.fees}</span>
                    <span className="text-lg">payment type: {invoice?.paymentType} <br /> paidOn: {invoice?.paidOn}</span>
                    <span className="text-lg">Subscription validity: {invoice?.paidDate} - {invoice?.dueDate}</span>
                </div>

                <div className="absolute right-2 top-2">
                    <Button Name={"close"} onClick={() => { setVisibility('hidden'); setSelectedInvoice?.(0); }} />
                </div>

            </div>
        </div>
    )
}