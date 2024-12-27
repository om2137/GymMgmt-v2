"use client"
import { useState } from "react";
import { Button } from "./Buttons/Button";

interface Props{
    listName: string;
    clients: {key:number,name:string}[];
}
export function List({listName,clients}:Props){
    const [fltr,setFltr] = useState('hidden');
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
                                <Button Name={"Filter"} onClick={filterVisibility}/>           
                            </div>
                        </div>
                        <div className={`absolute top-16 left-0 z=10 w-full ${fltr} bg-cyan-700 rounded-b-xl flex-col items-center px-4 py-2`}>
                            {
                                clients.map((client)=>(
                                    <div key={client.key} className="py-2">{client.name}</div>
                                ))
                            }
                            
                            
                        </div>
                    </div>
                    <div className="w-full max-h-[32rem] min-h-40 overflow-auto mx-4 pt-2" id="list">
                    {
                        clients.map((client)=>(
                            <div key={client.key} className="w-full h-20 flex items-center">
                                <div className="w-full mx-4 my-auto p-4 bg-cyan-800 dark:bg-cyan-900 rounded-xl">
                                    {client.name}
                                </div>
                                
                            </div>
                        ))
                    }
                    {
                        clients.map((client)=>(
                            <div key={client.key} className="w-full h-20 flex items-center">
                                <div className="w-full mx-4 my-auto p-4 bg-cyan-800 dark:bg-cyan-900 rounded-xl">
                                    {client.name}
                                </div>
                                
                            </div>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
        )
}