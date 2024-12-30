"use client"

import { useState } from "react";
import { SearchBar } from "./commons/SearchBar";
import Card from "./commons/Card";

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
    
    function handler(){
        if(filter ==='hidden'){
            setFilter('block');
        }else{
            setFilter('hidden');
        }
   }
   return(
        <div className="w-11/12 h-11/12 flex flex-wrap justify-center my-4 mx-auto bg-cyan-200 dark:bg-cyan-700 rounded-xl ">
            <div className="flex justify-between items-center text-2xl text-white bg-cyan-800 dark:bg-cyan-900 font-bold px-6 py-4 w-full rounded-t-xl ">
                <div className="my-2">Clients</div>
                <div className={`${filter}`}><SearchBar/></div>
                <button className="my-2" onClick={handler} >Filter</button>
            </div>
            {/* <div>
                <div className="m-2">
                    <Card heading={`test`} description={`test`}/>
                </div> 
            </div> */}
            <div  className=" w-full max-h-[36rem] overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {
                clients.map((client: client)=>(
                    
                    <div key={client.id} className="relative group hover:z-50 focus:z-50 transition-all m-2">
                        <Card heading={client.name} description={`age: ${client.age} address: ${client.address}}`}/>
                    </div> 
                ))
            }
            
            </div>
            
        </div>
    )
}