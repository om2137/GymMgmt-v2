
import Image from "next/image";
import DefaultImg from "/public/default.png"
import { Dispatch, SetStateAction } from "react";

interface Props {
    client: client;
    modalVisibility:string;
    setVisibility: Dispatch<SetStateAction<string>>;
    setSelectedClient: Dispatch<SetStateAction<number>>;
    setActiveCardId: Dispatch<SetStateAction<number | null>>;
    isActive: boolean;
    id: number;
}
interface client {
    id: number;
    Firstname: string;
    Lastname: string;
    gender: string;
    address: string;
}

export default function Card({ client, modalVisibility, setVisibility, setSelectedClient, setActiveCardId, isActive, id }: Props) {
    const handleToggle = () => {
        if(modalVisibility === 'hidden'){
            setActiveCardId(null);
        }
        
        console.log(id);
    };
    
    return (
        <div
            className={`
                ${isActive ? "scale-100 z-50" : ""}
                hover:scale-100 scale-90 transition-transform ease-in-out transform origin-center 
                group flex flex-col text-left text-black bg-cyan-600 
                rounded-xl shadow-lg shadow-cyan-200 relative
            `}
        >
            <div onClick={handleToggle} className="relative">
                <div className="aspect-[3/4] w-full bg-cyan-600 rounded-xl">
                    <Image
                        src={DefaultImg}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        alt={"no image"}
                        className="rounded-lg"
                    />
                    <button
                        className={`
                            ${isActive ? "opacity-100" : "opacity-0"}
                            bg-red-500 text-white text-sm rounded-lg p-2 absolute top-2 right-2 transition-opacity
                        `}
                    >
                        X
                    </button>
                </div>

                <div
                    className={`
                        absolute bottom-0 left-0 w-full rounded-b-lg group-hover:bg-gradient-to-b from-transparent to-cyan-700
                        p-2
                    `}
                >
                    <p className="text-sm text-black">{client.address}</p>
                    <h2 className="text-2xl font-bold text-black group-hover:hidden">
                        {client.Firstname} {client.Lastname}
                    </h2>
                    <div className={`
                            hidden group-hover:flex transition-transform delay-1000 ease-in-out justify-between text-center text-xl
                        
                        `}
                    >
                        <div className="flex flex-col justify-between">
                            <span className="text-base font-semibold">{client.Firstname} {client.Lastname}</span>
                            <span>age:test</span>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <div className="text-sm w-20 text-wrap">
                                80808888
                            </div>
                            <button
                                onClick={() => { setVisibility('flex'); setSelectedClient(id);}}
                                className="px-4 py-2 mx-1 my-2 bg-white rounded-xl text-sm text-cyan-950 shadow-sm shadow-cyan-300"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
