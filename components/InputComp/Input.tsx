
interface Props{
    placeholder?:string;
    Id?:string;
    setState?:( value:string )=>void;
}
export function SignInInput({ placeholder, Id, setState }:Props){ 
    return(
        <input 
            type="text" 
            id={Id} 
            onChange={(e)=>setState?.(e.target.value)}
            className="text-center font-serif border-b-2 border-white dark:bg-white dark:border-cyan-950 bg-cyan-950 focus:border-b-2 focus:outline-none focus:placeholder:text-white px-8 py-2" 
            placeholder={placeholder}
        />
    )
}
export function Input({ placeholder}:Props){ 
    return(
        <input 
            type="text"  
            // onChange={(e)=>setState?.(e.target.value)}
            className="w-full text-start text-lg border-b-2 border-cyan-900 bg-cyan-100 dark:border-white dark:bg-cyan-900 focus:border-b-2 focus:outline-none focus:placeholder:text-white dark:focus:placeholder:text-cyan-900 p-1" 
            placeholder={placeholder}
        />
    )
}