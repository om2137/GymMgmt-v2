"use client"

import { useEffect, useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = function () {
    const [visibility, setVisibility] = useState('hidden');
    const [onclick, setOnclick] = useState(false);
    const [searchDisplay, setSearchDisplay] = useState<string>('hidden');
    const [menuVisibility, setMenuVisibility] = useState('');
    const [searchVisibility, setSearchVisibility] = useState('');

    const currentRoute = usePathname(); // Get the current route path
    console.log(currentRoute)

    const menu = useMemo(() => [
        // {key:1, name:"home", route:"/"},
        { key: 2, name: "dashboard", route: "/admin" },
        { key: 3, name: "admission", route: "/admin/admission" },
        { key: 4, name: "clients", route: "/admin/clients" },
        { key: 5, name: "invoice", route: "/admin/invoice" },
        { key: 6, name: "SignIn", route: "/signin" }
    ], []);

    // const navTransition = 'transition ease-in-out delay-100 hover:scale-105';
    function onMenuClick() {
        console.log('click registered', visibility)

        if (visibility === 'hidden' || !onclick && currentRoute !== '/signin') {
            setVisibility('flex');
            setMenuVisibility('invisible');

        } else {
            setMenuVisibility('');
        }
    }
    function onSearchClick() {
        if (searchDisplay === 'flex') {
            setSearchDisplay('hidden');
            setSearchVisibility('');

        } else {
            setTimeout(() => {
                setSearchDisplay('flex');
            }, 700);
            setSearchVisibility('invisible');
        }
    }
    useEffect(() => {
        if (currentRoute === "/signin") {
            setSearchVisibility("invisible");
            setMenuVisibility('invisible');
        }
    }, [currentRoute])


    return (
        <div className="flex flex-col bg-transparent">
            <div
                className={` flex flex-col w-10/12 md:w-3/5 lg:w-2/5  
                motion-translate-x-in-[0%] motion-translate-y-in-[-100%] motion-duration-[0.00s] motion-duration-[1.00s]/translate
                ${onclick ? 'h-[432px]' : 'h-[64px]'} navbar-transition
                mx-auto my-6 bg-cyan-900 dark:bg-white text-white dark:text-cyan-950  rounded-2xl items-center `
                }>
                <div className="flex w-full capitalize justify-between px-6 mt-1">
                    <div className={`${searchVisibility} font-mono sm:text-lg`}>
                        <button onClick={() => { onMenuClick(); if (onclick) { setOnclick(false) } else { setOnclick(true) } }} className="p-2 m-2 uppercase ">
                            menu
                        </button>
                    </div>
                    <div className={`flex  font-serif font-bold sm:text-3xl`}>
                        <button className="my-auto">
                            Co. Name
                        </button>
                    </div>
                    <div className={`flex ${menuVisibility} font-mono sm:text-lg`}>

                        <button onClick={() => { 
                            onSearchClick(); if (onclick) { setOnclick(false) } else { setOnclick(true) } 
                        }} 
                            className={`p-2 my-2 mx-4 uppercase
                                transition-all duration-700
                                ${onclick ? 'opacity-0 max-h-[500px]' : 'opacity-100 max-h-0'} 
                                ease-in-out
                            `}>
                            {
                                searchVisibility === 'invisible' ?
                                    "X" : "S"
                            }
                        </button>
                    </div>
                </div>
                <div className={`${searchDisplay} flex flex-col w-full justify-center items-center pb-6`}>
                    <SearchBar searchDisplay={searchDisplay} />
                </div>

                <div
                    className={`
                        ${visibility} 
                        flex-col p-6 w-full capitalize text-center font-medium font-mono text-2xl 
                        transition-all duration-700 bg-cyan-100  border-t border-cyan-950 
                        ${onclick ? 'opacity-100 max-h-[432px]' : 'opacity-0 max-h-0'} 
                        overflow-hidden ease-in-out rounded-b-xl 
                    `}
                    >
                    {menu.map((item) => (
                        <Link key={item.key} href={item.route} className="py-4 capitalize block">
                            {item.name === "SignIn" ? "SignOut" : item.name}
                        </Link>
                    ))}
                </div>


            </div>

        </div>
    );
};
