
import Image from "next/image";
import DefaultImg from "/public/default.png"
import { Dispatch, SetStateAction } from "react";

interface Props {
    client: client;
    setVisibility: Dispatch<SetStateAction<string>>;
    setSelectedClient: Dispatch<SetStateAction<number>>;
    setActiveCardId: Dispatch<SetStateAction<number | null>>;
    isActive: boolean;
    id: number;
}
interface client {
    id: number;
    name: string;
    age: number;
    email: string;
    gender: string;
    address: string;
}
export default function Card({ client, setVisibility, setSelectedClient,setActiveCardId, isActive, id }: Props,) {
    const handleToggle = () => {
        setActiveCardId(isActive ? null : id); 
    };
    
    return (
        <div 
            className={`
                ${isActive ? 'scale-110 z-50' : ''}
                hover:scale-110 group relative flex flex-col text-left text-black bg-cyan-600 
                rounded-xl shadow-lg shadow-cyan-200`
            }
        >
            <div className="relative" onClick={handleToggle}>
                <div className="w-3/4 h-[166px] bg-cyan-600 rounded-xl">
                    <Image
                        src={DefaultImg}
                        fill={true}
                        alt={"no image"}
                        className="rounded-lg"
                    />
                    <button className={`
                        ${isActive ? "opacity-100" : "opacity-0"}
                        bg-red-500 text-white text-sm rounded-lg p-2 absolute top-2 right-2 `
                    }>
                        X
                    </button>
                </div>
                <div className={`
                    ${isActive ? 'opacity-0' : 'opacity-100'}
                    absolute bottom-0 pl-4 pb-2 capitalize   group-hover:opacity-0`
                }>
                    <p className="text-sm text-gray-700">{client.address}</p>
                    <h2 className="text-2xl font-bold">{client.name}</h2>
                </div>
            </div>

            <div className={`absolute w-full capitalize text-white flex flex-col items-left top-32 
                    p-2 rounded-b-xl bg-cyan-800  opacity-0 group-hover:opacity-100 shadow-lg shadow-cyan-200
                    ${isActive ? "opacity-100" : "opacity-0"}
                 `}
            >
                <div className="flex justify-between">
                    <span className="font-semibold">{client.name}</span>
                    <span>age:{client.age}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm w-20 text-wrap">
                        80808888
                    </div>
                    <button
                        onClick={() => { setVisibility('flex'); setSelectedClient(id); if(isActive){handleToggle()}  }}
                        className="px-4 py-2 mx-1 my-2 bg-white rounded-xl text-sm text-cyan-950 shadow-sm shadow-cyan-300" 
                    >
                        Details
                    </button>
                </div>
                <div className="flex justify-end items-end">
                    
                </div>
                
            </div>
        </div>
    );
}
