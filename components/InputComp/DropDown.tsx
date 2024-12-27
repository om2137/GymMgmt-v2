'use client'
interface props{
    list: {key:number; name:string}[];
    setGender: (value:string)=>void;
}
export function Dropdown({list,setGender}: props){

    return(
        <div>
            <label htmlFor="test"> Gender: </label>
            <select 
                onChange={(e)=> setGender(e.target.value)}
                name="test" 
                id="test" 
                className="w-2/3 border bg-cyan-100 border-cyan-900 dark:border-white rounded dark:bg-cyan-900 p-2 m-2 focus:outline-none"
                defaultValue=""
            >
                <option value="" disabled className="hidden">
                    Select Gender
                </option>
                {
                    list.map((item)=>(
                       <option key={item.key} value={item.name}>{item.name}</option> 
                    ))
                }
            </select>
        </div>
    )
}