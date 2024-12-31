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