"use client"
import Image from "next/image";
import DefaultImg from "/public/default.png"
import { useState } from "react";

interface Props {
    heading: string;
    description: string;
}

export default function Card({ heading, description }: Props) {
    // Check if img is a valid string
    // const visibility = "hidden";
    const [visibility, setVisibility] = useState('hidden');
    function handleVisiblity(){
        console.log('click registered', visibility)

        if(visibility === 'hidden' ){
            setVisibility('flex') ;

        }else{
            setVisibility('hidden');
        }
    }

    return (
        <button onClick={handleVisiblity} className="hover:scale-110 relative flex text-left text-black bg-cyan-600  border-2 rounded-xl border-white shadow-md shadow-cyan-800">
            <div className="w-[260px] h-[166px] bg-cyan-600 rounded-xl">
                <Image
                    src={DefaultImg}
                    // src=""
                    width={260}
                    height={166}
                    alt={"no image"}
                    className="rounded-lg"
                />
            </div>
            <div className="absolute bottom-0 pl-4 pb-2 capitalize">
                <p className="text-sm text-gray-700">{description}</p>
                <h2 className="text-2xl font-bold">{heading}</h2>
            </div>
            <div className={`${visibility} w-36 flex-col justify-center items-center text-white text-lg font-semibold  rounded-r-xl capitalize`}>
                <span>name</span>
                <span>age</span>
                <span>number</span>
                <span>contact</span>
            </div>
        </button>
    );
}
