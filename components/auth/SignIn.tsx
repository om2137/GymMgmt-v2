"use client"
import { useState } from "react";
import { SignInButton } from "../Buttons/Button";
import { SignInInput } from "../InputComp/Input";

export function SignIn() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="mt-28">
             <div className={`flex flex-col w-1/2 h-full mx-auto my-auto px-6 bg-cyan-950 dark:bg-white text-white dark:text-cyan-950 border-2  rounded-2xl items-center `}>
                <div className="flex w-full capitalize justify-center">
                    <div className="flex m-8 font-serif font-bold sm:text-3xl ">
                        Sign In
                    </div>
                </div>
                <div className={`flex flex-col items-center border-t-2 dark:border-cyan-950 py-12 w-full capitalize text-center font-semibold font-sans text-lg`}>
                    <div className="flex justify-center w-2/3 my-4" >
                        <SignInInput placeholder="Username" setState={setUsername} Id="username"/>
                    </div>
                    <div className="flex justify-center w-2/3 my-4" >
                        <SignInInput placeholder="Password" setState={setPassword} Id="password"/>    
                    </div>
                    <div className="flex justify-center w-2/3 my-4">
                        <SignInButton route="/admin" username={username} password={password} Name={"Sign In"} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}