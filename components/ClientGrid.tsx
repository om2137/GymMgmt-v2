"use client"

import { useEffect, useState } from "react";
import { SearchBar } from "./commons/SearchBar";
import Card from "./commons/Card";
import { Modal } from "./commons/Modal";

interface client {
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
}

interface props {
    clients: client[]
}

export function ClientGrid({ clients }: props) {
    const [filter, setFilter] = useState('hidden');
    const [visibility, setVisibility] = useState('hidden');
    const [selectedClient, setSelectedClient] = useState(0);
    const [activeCardId, setActiveCardId] = useState<number | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    console.log(clients)
    useEffect(()=>{
        if(clients.length > 4){
            setIsOverflowing(true);
        }else{
            setIsOverflowing(false);
        }
        
    },[])
    function handler() {
        if (filter === 'hidden') {
            setFilter('block');
        } else {
            setFilter('hidden');
        }
    }
    return (
        <div className={`relative w-full h-full flex flex-wrap justify-center bg-cyan-200 dark:bg-cyan-700 rounded-xl`} >
            <div className="flex justify-between items-center text-2xl text-white bg-cyan-800 dark:bg-cyan-900 font-bold px-6 py-4 w-full rounded-t-xl ">
                <div className="my-2">Clients</div>
                <div className={`${filter}`}><SearchBar /></div>
                <button className="my-2" onClick={handler} >Filter</button>
            </div>

            <div
                className={`
                    ${visibility === `flex` ? 'pointer-events-none' : ''} 
                    w-full min-h-[16.5rem] max-h-[36rem] overflow-auto 
                    grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
                    p-4 pb-8` 
                }>
                {
                    clients.map((client: client, index: number) => (
                        <div
                            key={client.id}
                            className={`
                                relative group hover:z-10 focus:z-10 transition-all m-2 
                                ${isOverflowing && index >= clients.length - (clients.length % 4 || 4)
                                ? 'hover:bottom-10' : ''}
                            `}
                        >
                            <Card
                                id={index}
                                setVisibility={setVisibility}
                                client={client}
                                setSelectedClient={setSelectedClient}
                                isActive={activeCardId === index}
                                setActiveCardId={setActiveCardId}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={`${visibility} absolute top-40`}>
                <Modal visibility={visibility} setVisibility={setVisibility} client={clients?.[selectedClient] ?? null} />
            </div>
        </div>
    )
}