"use client"

import { signIn } from "next-auth/react";

interface Props{
    route?: string;
    username?: string;
    password?: string;
    onClick?: () => void;
    Name: string;
    properties?: string;
    btnColor?: string;
}

export const SignInButton = function( { username, password,Name}: Props){
    
    function checkUser(){
        if(!username?.trim() && !password?.trim()){
            alert(`missing fields`);
        }
        else{
            alert(`${username} ${password}`);
            signIn("credentials", { username: username, password: password })
        }
        
    }

    return(
        <div>
            <button 
                onClick={checkUser} 
                className=" hover:bg-white dark:hover:bg-cyan-950 hover:text-cyan-950 dark:hover:text-white rounded-xl py-2 px-4 capitalize">
                {Name}
            </button>
        </div>
    );
} 
export const FilterButton = function({onClick, Name}:Props){
    return(
        <button onClick={onClick} className="capitalize text-white">{Name}</button>
    )
}
export const Button = function({onClick, Name, properties, btnColor}:Props){    
    return(
        <button onClick={onClick} className={`${properties} ${btnColor? btnColor : 'bg-red-500'} capitalize px-4 py-2 m-2  ${btnColor === 'bg-white' || btnColor ==='bg-transparent'? 'text-cyan-950' : 'text-white'} rounded-lg`}>{Name}</button>
    )
}