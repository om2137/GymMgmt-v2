"use client"

import { useState } from "react";
import { SearchBar } from "./commons/SearchBar";
import Card from "./commons/Card";
import { Modal } from "./commons/Modal";

interface client{
    id: number;
    name: string;
    age: number;
    email: string;
    gender: string;
    address: string;
}

interface props{
    clients: client[]
}

export function ClientGrid({clients}:props){
    const [filter, setFilter] = useState('hidden');
    const [visibility, setVisibility]= useState('hidden');
    const [selectedClient, setSelectedClient] = useState(0);
    const [activeCardId, setActiveCardId] = useState<number | null>(null);
    
    function handler(){
        if(filter ==='hidden'){
            setFilter('block');
        }else{
            setFilter('hidden');
        }
   }
   return(
        <div className={`w-11/12 relative h-11/12 flex flex-wrap justify-center my-4 mx-auto bg-cyan-200 dark:bg-cyan-700 rounded-xl`} >
            <div className="flex justify-between items-center text-2xl text-white bg-cyan-800 dark:bg-cyan-900 font-bold px-6 py-4 w-full rounded-t-xl ">
                <div className="my-2">Clients</div>
                <div className={`${filter}`}><SearchBar/></div>
                <button className="my-2" onClick={handler} >Filter</button>
            </div>
            
            <div  
                className= {`
                    ${visibility === `flex`? 'pointer-events-none' : ''} 
                    w-full max-h-[36rem] overflow-auto 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    p-4`
                }>
            {
                clients.map((client: client, index: number)=>(
                    
                    <div
                        key={client.id}
                        className={`
                        relative group hover:z-10 focus:z-10 transition-all m-2 
                        ${
                            index >= clients.length - (clients.length % 4 || 4) 
                            ? ' hover:bottom-10' 
                            : ''
                        }
                        `}
                    >
                        <Card 
                            id={client.id} 
                            setVisibility={setVisibility} 
                            client={client}
                            setSelectedClient={setSelectedClient}
                            isActive={activeCardId === client.id} 
                            setActiveCardId={setActiveCardId}
                        />
                    </div> 
                ))
            }
            </div> 
            <div className={`${visibility} absolute top-40`}>
                <Modal visibility={visibility} setVisibility={setVisibility} client={clients[selectedClient-1]}/>
            </div>
        </div>
    )
}