"use client"

import Link from "next/link";

interface Props{
    route?: string;
    username?: string;
    password?: string;
    onClick?: () => void;
    Name: string;
    properties?: string;
    btnColor?: string;
}

export const SignInButton = function( {route, username, password,Name}: Props){
    
    function checkUser(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        if(!username?.trim() && !password?.trim()){
            e.preventDefault();
            alert(`missing fields`);
        }else if(username !== 'user' && password !== 'pass'){

        }
        else{
            // alert(`${username} ${password}`);
        }
        
    }

    return(
        <div>
            <Link 
                href={route||""} 
                onClick={checkUser} 
                className=" hover:bg-white dark:hover:bg-cyan-950 hover:text-cyan-950 dark:hover:text-white rounded-xl py-2 px-4 capitalize">
                {Name}
            </Link>
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
        <button onClick={onClick} className={`${properties} ${btnColor? btnColor : 'bg-red-500'} capitalize px-4 py-2 m-2  ${btnColor === 'bg-white'? 'text-cyan-950' : 'text-white'} rounded-lg`}>{Name}</button>
    )
}