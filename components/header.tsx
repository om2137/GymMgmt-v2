"use client"

import Link from "next/link";
import { useState } from "react";

export const Header = function () {
    const [visibility, setVisibility] = useState('hidden');
    const [menuVisibility, setMenuVisibility] = useState('');
    const menu = [
        {key:1, name:"Profiles"},
        {key:2, name:"admission"},
        {key:3, name:"invoice"},
        {key:4, name:"more option"},
    ];
    const navTransition = 'transition ease-in-out delay-100 hover:scale-105';
    function onMenuClick(){
        console.log('click registered', visibility)
        if(visibility==='flex'){
            setVisibility('hidden');
            setMenuVisibility('');

        }else{
            setVisibility('flex') ;
            setMenuVisibility('invisible');
        }
    }
    return (
        <div className="flex flex-col bg-transparent">
            <div className={`${navTransition} flex flex-col w-1/2 mx-auto my-4 px-6 bg-white text-black border-2 border-white rounded-2xl items-center shadow-cyan-500/50`}>
                <div className="flex w-full capitalize justify-between shadow-cyan-500/50">
                    <div className=" font-mono sm:text-lg">
                        <button onClick={onMenuClick} className="p-2 m-2 uppercase hover:text-gray-600">
                            menu 
                        </button>
                    </div>
                    <div className="flex font-serif font-bold sm:text-3xl ">
                        <button className="my-auto">
                            Co. Name
                        </button>
                    </div>
                    <div className={`flex ${menuVisibility} font-mono sm:text-lg`}>
                        <Link href="/signin" className="my-auto uppercase hover:text-gray-600">
                            hello 
                        </Link>
                    </div>
                </div>
                <div className={`${visibility} flex-col py-6 w-full border border-t-black capitalize text-center font-medium font-mono text-2xl`}>
                    {menu.map((item) => ( 
                        <button key={item.key} className="py-4 capitalize">
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};
