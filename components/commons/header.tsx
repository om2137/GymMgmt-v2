"use client"

import { useEffect, useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = function () {
    const [visibility, setVisibility] = useState('hidden');
    const [searchDisplay, setSearchDisplay] = useState<string>('hidden');
    const [menuVisibility, setMenuVisibility] = useState('');
    const [searchVisibility, setSearchVisibility] = useState('');

    const currentRoute = usePathname(); // Get the current route path
    console.log(currentRoute)

    const menu = useMemo(()=>[
        // {key:1, name:"home", route:"/"},
        {key:2, name:"dashboard", route:"/admin"},
        {key:3, name:"admission", route:"/admin/admission"},
        {key:4, name:"clients", route:"/admin/clients"},
        {key:5, name:"invoice", route:"/admin/invoice"},
        {key:6, name:"SignIn", route:"/signin"}
    ],[]);

    // const navTransition = 'transition ease-in-out delay-100 hover:scale-105';
    function onMenuClick(){
        console.log('click registered', visibility)

        if(visibility === 'hidden' && currentRoute !== '/signin' ){
            setVisibility('flex') ;
            setMenuVisibility('invisible');

        }else{
            setVisibility('hidden');
            setMenuVisibility('');
        }
    }
    function onSearchClick(){
        if(searchDisplay==='flex'){
            setSearchDisplay('hidden');
            setSearchVisibility('');

        }else{
            setSearchDisplay('flex') ;
            setSearchVisibility('invisible');
        }
    }
    useEffect (()=> {
        if( currentRoute === "/signin" ){
            setSearchVisibility("invisible");
            setMenuVisibility('invisible');
        }
    },[currentRoute])
    

    return (
        <div className="flex flex-col bg-transparent">
            <div className={` flex flex-col w-1/2 mx-auto my-4 px-6 bg-cyan-900 dark:bg-white text-white dark:text-cyan-950 border-2  rounded-2xl items-center `}>
                <div className="flex w-full capitalize justify-between">
                    <div className={`${searchVisibility} font-mono sm:text-lg`}>
                        <button onClick={onMenuClick} className="p-2 m-2 uppercase ">
                            menu 
                        </button>
                    </div>
                    <div className={`flex  font-serif font-bold sm:text-3xl`}>
                        <button className="my-auto">
                            Co. Name
                        </button>
                        {/* <Link
                            href={`/`}
                            className="my-auto"
                        >
                            Co. Name
                        </Link> */}
                    </div>
                    <div className={`flex ${menuVisibility} font-mono sm:text-lg`}>
                        
                        
                        <button onClick={onSearchClick} className={`p-2 my-2 mx-4 uppercase`}>
                            {
                                searchVisibility === 'invisible' ? 
                                    "X" : "S"
                            } 
                        </button> 
                    </div>
                </div>
                <div className={`${searchDisplay} flex flex-col w-full justify-center items-center pb-6`}>
                    <SearchBar searchDisplay={searchDisplay}/>
                </div>
                
                <div className={`${visibility} flex-col py-6 w-full  capitalize text-center font-medium font-mono text-2xl`}>
                    {menu.map((item) => ( 
                        <Link key={item.key}href={item.route} className="py-4 capitalize">
                            {
                                item.name === "SignIn" ? "SignOut" : item.name
                            }
                        </Link>           
                    ))}
                </div>
                
            </div>

        </div>
    );
};
