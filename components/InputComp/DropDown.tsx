'use client'
interface props{
    list: {key:number; name:string; value: string|number}[];
    setValue?: (value:string)=>void;
    name:string;
    placeholder: string;
    width?: string;
    onChange?:() => void;
}
export function Dropdown({ name, list, setValue, placeholder, width, onChange }: props){

    return(
        <div className="w-full capitalize">
            <label htmlFor="test" className=""> Select: </label>
            <select 
                onChange={(e)=> {
                    setValue?.(e.target.value); 
                    if(onChange){onChange()}; 
                }}
                name={name} 
                id={name} 
                className={`${width} border capitalize bg-cyan-100 border-cyan-900 dark:border-white rounded dark:bg-cyan-900 p-2 m-2 focus:outline-none`}
                defaultValue=""
            >
                <option value="" disabled className="hidden">
                    { placeholder }
                </option>
                {
                    list.map((item)=>(
                       <option key={item.key} value={item.value}>{item.name}</option> 
                    ))
                }
            </select>
        </div>
    )
}