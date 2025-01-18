"use client"
import { useState } from "react";
import { FilterButton } from "./Buttons/Button";
import filters from "@/Jsons/filter.json"
import { InvoiceModal } from "./commons/Modal";

interface Props {
    listName: string;
    invoices?: {
        id: number;
        member: 
        {
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
        paidDate: string;
        paidOn: string;
        dueDate: string;
        facility: string;
        fees: number;
        admFee: number;
        PaymentType: string;
    }[];

    clients?: {
        id: number;
        name: string;
        age: number;
        email: string;
        gender: string;
        address: string;
    }[]
}
interface invoice {
    id?: number;
    member: {
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
    paidDate: string;
    paidOn: string;
    dueDate: string;
    facility: string;
    fees: number;
    admFee: number;
    PaymentType: string;
}
interface filters {
    key: number;
    name: string;
    amount: string;
}

export function List({ listName, invoices }: Props) {
    const [fltr, setFltr] = useState('hidden');
    const [visibility, setVisibility] = useState('hidden');
    const [selectedInvoice, setSelectedInvoice] = useState<number>(0);

    function filterVisibility() {
        if (fltr === 'hidden') { setFltr('flex') } else { setFltr('hidden') }
    }
    return (
        <div className="h-4/5 w-[89%] mx-auto text-white dark:text">
            <div className=" h-full sm:mx-12 mt-8 flex flex-col items-center capitalize bg-cyan-200 dark:bg-cyan-700 rounded-xl">
                <div className={`${visibility === 'flex' ? 'pointer-events-none' : ''} w-full flex flex-col py-4 px-8 rounded-t-xl text-xl font-semibold bg-cyan-800 dark:bg-cyan-900`}>
                    <div className="w-full flex justify-between px-4 py-2">
                        <div>{listName}</div>
                        <div>
                            <FilterButton Name={"Filter"} onClick={filterVisibility} />
                        </div>
                    </div>
                    <div className={`absolute top-16 left-0 z=10 w-full ${fltr} bg-cyan-800 rounded-b-xl flex-col items-center px-4 py-2`}>
                        {
                            filters?.map((filter: filters) => (
                                <div key={filter.key} className="py-2">{filter.name}</div>
                            ))
                        }
                    </div>
                </div>
                
                <div className={` ${visibility === 'flex' ? 'pointer-events-none' : ''} w-full max-h-[32rem] min-h-40 overflow-auto overflow-x-hidden mx-4 pt-2" id="list`}>

                    {
                        invoices?.map((invoice: invoice, index: number) => (
                            <div key={index} className="w-full h-20 flex items-center hover:scale-105" >
                                <button
                                    className="w-full flex justify-between  mx-8 my-auto p-4 bg-cyan-800 dark:bg-cyan-900 rounded-xl"
                                    onClick={() => { setVisibility('flex'); console.log(); setSelectedInvoice(index) }}
                                >
                                    <div>{invoice.id}. {invoice.member.id}</div>
                                    <div>{invoice.fees}</div>
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className={`${visibility} absolute top-64`}>
                    <InvoiceModal
                        visibility={visibility} setVisibility={setVisibility}
                        setSelectedInvoice={setSelectedInvoice}
                        invoice={invoices?.[selectedInvoice]} 
                    />
                </div>
            </div>
        </div>
    )
}