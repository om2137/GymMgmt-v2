"use client"
import { useState } from "react";
import { FilterButton } from "./Buttons/Button";
import filters from "@/Jsons/filter.json"
import { Modal } from "./commons/Modal";

interface Props{
    listName: string;
    invoices?: {
        key: number;
        invoiceId: string;
        name: string;
        amount: string;
    }[],
    clients?: {
        id: number;
        name: string;
        age: number;
        email: string;
        gender: string;
        address: string;
    }[]
}
interface invoice{
    key: number;
    name: string;
    amount: string;
}

export function List({listName,invoices,clients}:Props){
    const [fltr,setFltr] = useState('hidden');
    const [visibility, setVisibility]= useState('hidden');
    function filterVisibility(){
        if(fltr === 'hidden'){setFltr('flex')}else{setFltr('hidden')}
    }
    return(
            <div className="h-4/5 w-[89%] mx-auto text-white dark:text">
                <div className="relative h-full mx-12 mt-8 flex flex-col items-center capitalize bg-cyan-200 dark:bg-cyan-700 rounded-xl">
                    <div className="w-full flex flex-col py-4 px-8 rounded-t-xl text-xl font-semibold bg-cyan-800 dark:bg-cyan-900">
                        <div className="w-full flex justify-between px-4 py-2">
                            <div>{listName}</div>
                            <div>
                                <FilterButton Name={"Filter"} onClick={filterVisibility}/>           
                            </div>
                        </div>
                        <div className={`absolute top-16 left-0 z=10 w-full ${fltr} bg-cyan-800 rounded-b-xl flex-col items-center px-4 py-2`}>
                            {
                                filters?.map((invoice:invoice)=>(
                                    <div key={invoice.key} className="py-2">{invoice.name}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full max-h-[32rem] min-h-40 overflow-auto overflow-x-hidden mx-4 pt-2" id="list">
                    
                    {
                        invoices?.map((invoice:invoice)=>(
                            <div key={invoice.key} className="w-full h-20 flex items-center hover:scale-105" >
                                <div 
                                    className="w-full flex justify-between  mx-8 my-auto p-4 bg-cyan-800 dark:bg-cyan-900 rounded-xl"
                                    onClick={()=>{setVisibility('flex'); console.log("click") }}
                                >
                                    <div>{invoice.key}. {invoice.name}</div>
                                    <div>{invoice.amount}</div>
                                </div>
                                
                            </div>
                        ))
                    }
                    <div className={`${visibility} absolute top-32 left-60`}>
                        <Modal visibility={visibility} setVisibility={setVisibility} client={clients?.[0]}/>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
}