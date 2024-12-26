"use client"

import Link from "next/link";

interface Props{
    route?: string;
    username?: string;
    password?: string;
    onClick?: () => void;
    Name: string;
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

export const Button = function({onClick, Name}:Props){
    return(
        <button onClick={onClick} className="capitalize">{Name}</button>
    )
}