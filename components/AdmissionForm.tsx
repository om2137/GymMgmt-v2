"use client"
import { useEffect, useState } from "react"
import { Dropdown } from "./InputComp/DropDown"
import { Input } from "./InputComp/Input"

export function AdmissionForm(){
    const [selectedGender,setSelectedGender] = useState('');
    const [isMarried, setIsMarried] = useState(false);
    const gender = [
        {key:1, name:"Male"},
        {key:2, name:"Female" },
        
    ]
    useEffect(()=>{
        console.log(selectedGender);
        console.log(isMarried);
    },[isMarried, selectedGender])
    return(
        <div className="w-full h-4/6 flex">
            <div className="w-full flex justify-center items-center border-2 border-cyan-900 bg-cyan-200 dark:bg-cyan-900 rounded-xl m-2">        
                <div className="w-1/2 h-4/5 border-r-2 border-cyan-900 dark:border-white px-8">
                    <div className="flex justify-start text-2xl font-serif mb-2">
                        <span className="p-1">Card No. </span>
                        <div className="w-20">
                            <Input />
                        </div>
                    </div>
                     <div className="w-full flex flex-col justify-center items-start text-xl py-4">
                        <div >Name: </div>
                        <div className="w-full px-auto"><Input placeholder="Firstname"/></div>
                        <div className="w-full px-auto"><Input placeholder="middlename"/></div>
                        <div className="w-full py-1 px-auto"><Input placeholder="Lastname"/></div>
                    </div>  
                    <div className="w-full flex justify-between items-center text-base pt-2">
                        <label htmlFor="dob">Date of Birth: </label>
                        <input 
                            type="date" onChange={(e)=>{setIsMarried(e.target.checked)}} 
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none" 
                            id="dob" name="dob"
                        />
                    </div> 
                    <div className="w-full flex justify-between items-center text-base pt-2">
                        <div >Date of Admission: </div>
                        <input 
                            type="date" onChange={(e)=>{setIsMarried(e.target.checked)}} 
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none" 
                            id="dob" name="dob"
                        />
                    </div>           
                </div>
                <div className="w-1/2 h-4/5 px-8">
                    <div className="w-full  flex justify-end">
                        <div className="h-24 w-20 border-2 border-cyan-900 dark:border-white rounded flex justify-center items-center text-2xl font-serif">
                            img
                        </div>
                    </div>
                    <div className="text-xl py-2">
                        Address:
                        <div className="pb-2"><Input /></div>
                        
                        <div className="text-lg py-2">
                            contact no: 
                            <input 
                                type="number"  
                                // onChange={(e)=>setState?.(e.target.value)}
                                className="text-start text-lg font-serif border-b-2 border-cyan-900 bg-cyan-100 dark:bg-cyan-900 dark:border-white focus:border-b-2 focus:outline-none focus:placeholder:text-white dark:focus:placeholder:text-cyan-900 p-1" 
                            />
                        </div>
                        
                        <div className="text-lg py-2"> <Dropdown list={gender} setGender={setSelectedGender} /> </div>
                        <div className="text-lg pb-2">
                            <label htmlFor="isMarried">Is Married: </label>
                            <input type="checkbox" onChange={(e)=>{setIsMarried(e.target.checked)}} className="rounded-full" id="isMarried" name="isMarried"/>
                        </div>        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}