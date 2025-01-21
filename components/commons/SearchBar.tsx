import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    searchDisplay?: string;
    list?: list[];
    setId?: (value:number)=>void;
}
interface list {
    id: number;
    name?: string;
    avatar?: string;
    route?: string;
}
export function SearchBar({ searchDisplay, list, setId }: Props) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredList, setFilteredList] = useState<{ id: number; name?: string; avatar?: string; }[]>([]);
    
    useEffect(() => {
        console.log("rerender");
        if (searchInput.trim() !== '') {
            const filtered = list?.filter((item) =>
                item.name?.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredList(filtered || []);
        } else {
            setFilteredList([])
        }
    }, [searchInput, searchDisplay, list])

    return (
        <div className="relative ">
            <div className={`flex ${searchDisplay} w-full capitalize justify-center items-center `}>
                <div className="w-full flex items-center font-mono sm:text-lg">
                    <input
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        type="text"
                        placeholder="search"
                        className="w-full px-4 py-2 capitalize text-white dark:text-cyan-950 bg-cyan-800 dark:bg-white border border-r-0 border-white dark:border-cyan-950 dark:focus:border-cyan-950 focus:outline-none rounded-l-xl"
                    />
                    <div
                        className=" px-4 py-2 capitalize bg-cyan-800 dark:bg-white text-white dark:text-cyan-950 border border-l-0 border-white dark:border-cyan-950 dark:focus:border-cyan-950 focus:outline-none rounded-r-xl"
                    >
                        <button onClick={() => {
                            setFilteredList([]);
                            setSearchInput('');
                        }}>
                            X
                        </button>
                    </div>
                </div>
                        
            </div>
            <div className={`${searchDisplay} absolute flex flex-col w-full rounded-2xl capitalize text-center font-medium font-mono text-2xl`}>
                {
                    filteredList.length > 0 || filteredList === undefined ?
                        filteredList.map((item) => (
                            <button key={item.id} onClick={()=>{
                                setId?.(item.id);
                                setFilteredList([]);
                                setSearchInput('');
                            }} 
                            className="flex  top-0 w-full py-4 capitalize bg-cyan-700 hover:bg-cyan-600"
                            >
                                {item.avatar? 
                                    <div className="relative w-16 h-10 mx-4">
                                        <Image src={item.avatar} fill alt="no image" className="rounded-xl"/>
                                    </div> 
                                    : null
                                } <div>{item.name}</div>
                                
                            </button>
                        )) : (<span></span>

                        )
                }
            </div>
        </div>
    )
}