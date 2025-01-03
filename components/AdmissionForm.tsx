"use client"
import React, { useEffect, useState } from "react"
import { Dropdown } from "./InputComp/DropDown"
import { Input } from "./InputComp/Input"

interface user{
    cardNo: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    admissionDate: string;
    imgUrl: string;
    address: string;
    contact: string;
    gender: string;
    isMarried: boolean;
}

export function AdmissionForm(){
    const [selectedGender,setSelectedGender] = useState('');
    // const [isMarried, setIsMarried] = useState(false);
    const [user, setUser] = useState<user>({
        cardNo: 0,
        firstName:'',
        middleName:'',
        lastName:'',
        dob:'',
        admissionDate:'',
        imgUrl: "", 
        address:'',
        contact:'',
        gender: selectedGender,
        isMarried: false,
    });
    const gender = [
        {key:1, name:"Male"},
        {key:2, name:"Female" },
        
    ]
    useEffect(()=>{
        setUser({
            ...user,
            gender: selectedGender
        })
        
        console.log(selectedGender);
    },[ selectedGender])
    // useEffect(()=>{
    //     setUser({
    //         ...user,
    //         isMarried: isMarried
    //     })
    // },[isMarried])

    function handleChange(e: React.ChangeEvent<any>){
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    return(
        <div className="w-full h-4/6 flex">
            <div className="w-full flex justify-center font-sans items-center border-2 border-cyan-900 bg-cyan-200 dark:bg-cyan-900 rounded-xl m-2">        
                <div className="w-1/2 h-5/6 border-r-2 border-cyan-900 dark:border-white px-8">
                    <div className="flex justify-start  text-2xl mb-2">
                        <span className="p-1  font-serif">Card No. </span>
                        <div className="w-20" >
                            <Input name="cardNo" changeHandler={handleChange} />
                        </div>
                    </div>
                     <div className="w-full flex flex-col justify-center items-start text-xl py-4">
                        <div >Name: </div>
                        <div className="w-full px-auto"><Input placeholder="Firstname"  name="firstName" changeHandler={handleChange}/></div>
                        <div className="w-full px-auto"><Input placeholder="middlename"  name="middleName" changeHandler={handleChange}/></div>
                        <div className="w-full py-1 px-auto"><Input placeholder="Lastname"  name="lastName" changeHandler={handleChange}/></div>
                    </div>  
                    <div className="w-full flex justify-between items-center text-base pt-2">
                        <label htmlFor="dob">Date of Birth: </label>
                        <input 
                            type="date" 
                            onChange={handleChange}
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none" 
                            name="dob"
                        />
                    </div> 
                    <div className="w-full flex justify-between items-center text-base pt-2">
                        <div >Date of Admission: </div>
                        <input 
                            type="date" 
                            onChange={handleChange}
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none" 
                            name="admissionDate"
                        />
                    </div>           
                </div>
                <div className="relative w-1/2 h-5/6 px-8 mr-2">
                    <div className="w-full  flex justify-end">
                        <div className="h-24 w-20 border-2 border-cyan-900 dark:border-white rounded flex justify-center items-center text-2xl font-serif">
                            img
                        </div>
                    </div>
                    <div className="text-xl py-2">
                        Address:
                        <div className="pb-2"><Input  name="address" changeHandler={handleChange}/></div>
                        
                        <div className="text-lg py-2">
                            contact no: 
                            <input 
                                type="text"  
                                name="contact"
                                onChange={handleChange}
                                className="text-start text-lg border-b-2 border-cyan-900 bg-cyan-100 dark:bg-cyan-900 dark:border-white focus:border-b-2 focus:outline-none focus:placeholder:text-white dark:focus:placeholder:text-cyan-900 p-1" 
                            />
                        </div>
                        
                        <div className="text-lg py-2"> <Dropdown name="gender" list={gender} setGender={setSelectedGender} /> </div>
                        <div className="text-lg pb-2">
                            <label htmlFor="isMarried">Is Married: </label>
                            <input type="checkbox" onChange={(e)=>{
                                setUser({
                                    ...user,
                                    [e.target.name]: e.target.checked,
                                })}} 
                                className="rounded-full" id="isMarried" name="isMarried"
                            />
                        </div>        
                    </div>
                    <div className="absolute -bottom-4 right-4">
                        <button onClick={()=>{console.log(user)}} className="px-4 py-2 bg-white text-base text-cyan-900 rounded-xl">
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}