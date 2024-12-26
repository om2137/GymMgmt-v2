import { useEffect, useMemo, useState } from "react";

interface Props{
    searchDisplay: string;
}

export function SearchBar( { searchDisplay }: Props ){
    const [searchInput, setSearchInput] =useState('');
    const [filteredList, setFilteredList] = useState<{ key: number; name: string }[]>([]);
    const menu = useMemo(()=>[
            {key:1, name:"Profiles"},
            {key:2, name:"admission"},
            {key:3, name:"invoice"},
            {key:4, name:"SignIn"},
        ],[]);

    useEffect(()=>{
        console.log("rerender");
        if(searchInput.trim() !== ''){
            const filtered = menu.filter((item) =>
                item.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredList(filtered);
        } else{
            setFilteredList([])
        }
    },[searchInput,menu,searchDisplay])

    console.log(searchInput+" ", filteredList)
    
    return (
        <>
            <div className={`flex ${searchDisplay} w-full capitalize justify-center items-center `}>
                <div className="w-full flex items-center font-mono sm:text-lg">
                    <input
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        type="text"
                        placeholder="search"
                        className="w-full px-4 py-2 capitalize text-cyan-950 border border-r-0 border-cyan-950 focus:border-cyan-950 focus:outline-none rounded-l-xl"
                    />
                    <div 
                        className=" px-4 py-2 capitalize text-cyan-950 border border-l-0 border-cyan-950 focus:border-cyan-950 focus:outline-none rounded-r-xl"
                    >
                        <button onClick={()=> {
                            setFilteredList([]);
                            setSearchInput('');
                        }}>
                            X
                        </button>
                    </div>
                </div>

                </div>
                <div className={`${searchDisplay} flex flex-col pb-6 w-full  capitalize text-center font-medium font-mono text-2xl`}>
                    {
                        filteredList.length > 0 || filteredList === undefined ?
                            filteredList.map((item)=>(
                                <button key={item.key} className="py-4 capitalize">
                                    {item.name}
                                </button>
                            )) : ( <span></span>
                            
                            )
                    }
                </div>
        </>
    )
}