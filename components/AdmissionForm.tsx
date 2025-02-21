"use client"
import React, { useState } from "react"
import { Dropdown } from "./InputComp/DropDown"
import { Input } from "./InputComp/Input"
import { ImageUploader } from "./commons/ImageUploader";
import axios from "axios";

interface user {
    cardNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    admissionDate: string;
    imgUrl: string;
    address: string;
    contact: number;
    gender: string;
    isMarried: boolean;
}

export function AdmissionForm() {
    // const [isMarried, setIsMarried] = useState(false);
    const [user, setUser] = useState<user>(
        {
        cardNo: '',
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        admissionDate: '',
        imgUrl: "",
        address: '',
        contact: 0,
        gender: '',
        isMarried: false,
        }
    );
    const gender = [
        { key: 1, name: "Male", value: 'male' },
        { key: 2, name: "Female", value: 'female' },

    ]
    function handleGender(value:string){
        setUser({
            ...user,
            gender: value
        })

        console.log(value);
    }

    function handleChange(e: React.ChangeEvent<string | HTMLInputElement | undefined>) {
        const { name, value, type} = e.target as HTMLInputElement;
        setUser({
            ...user,
            [name]: type === 'number' ? Number(value) : type === 'date' ? `${value}T00:00:00.000Z` :value,
        })
    }

    async function InsertUser() {
        try {
            const response = await axios.post("http://localhost:3000/api/clients", user)
            console.log(response)
            alert(response.data.cardNo);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="w-full lg:h-3/4 flex">
            <div className="w-full flex flex-col lg:flex-row justify-center font-sans items-center m-2">
                <div className="w-full lg:w-1/2 h-full flex flex-col sm:flex-row lg:flex-col justify-center py-4 px-8 border-b-2 lg:border-b-0 lg:border-r-2 rounded-t-xl lg:rounded-r-none lg:rounded-l-xl border-cyan-900 dark:border-white bg-cyan-200 dark:bg-cyan-900">

                    <div className="px-4 lg:px-0 ">
                        <div className="flex justify-start  text-2xl mb-2 ">
                            <span className="p-1  font-serif">Card No. </span>
                            <div className="w-20" >
                                <Input name="cardNo" changeHandler={handleChange} />
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start text-xl py-4">
                            <div >Name: </div>
                            <div className="w-full px-auto"><Input placeholder="Firstname" name="firstName" changeHandler={handleChange} /></div>
                            <div className="w-full px-auto"><Input placeholder="middlename" name="middleName" changeHandler={handleChange} /></div>
                            <div className="w-full py-1 px-auto"><Input placeholder="Lastname" name="lastName" changeHandler={handleChange} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center m-4 lg:m-0">
                        <div className="w-full flex flex-row sm:flex-col md:flex-row justify-between items-center text-sm sm:text-base pt-2">
                            <label htmlFor="dob">Date of Birth: </label>
                            <input
                                type="date"
                                onChange={handleChange}
                                className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none"
                                name="dob"
                            />
                        </div>
                        <div className="w-full flex flex-row sm:flex-col md:flex-row justify-between items-center text-sm sm:text-base pt-2">
                            <div >Date of Admission: </div>
                            <input
                                type="date"
                                onChange={handleChange}
                                className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none"
                                name="admissionDate"
                            />
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center py-4 px-8 lg:mr-2 border-2 rounded-b-xl lg:rounded-l-none lg:rounded-r-xl border-cyan-900 bg-cyan-200 dark:bg-cyan-900 ">
                    <div className="w-full flex justify-end">
                        <ImageUploader />
                    </div>
                    <div className="px-4">
                        <div>
                            Address:
                            <div className="pb-2"><Input name="address" changeHandler={handleChange} /></div>
                        </div>

                        <div className="text-lg py-2">
                            contact no:
                            <input
                                type="number"
                                name="contact"
                                onChange={handleChange}
                                className="text-start text-lg border-b-2 border-cyan-900 bg-cyan-100 dark:bg-cyan-900 dark:border-white focus:border-b-2 focus:outline-none focus:placeholder:text-white dark:focus:placeholder:text-cyan-900 p-1"
                            />
                        </div>

                    </div>
                    <div className="pb-2 ">

                        <div className="text-lg py-2 px-4 "> <Dropdown name="gender" list={gender} setValue={handleGender} placeholder={"Select Gender"} /> </div>
                        <div className="flex justify-between text-lg p-4">
                            <div>
                                <label htmlFor="isMarried">Is Married: </label>
                                <input type="checkbox" onChange={(e) => {
                                    setUser({
                                        ...user,
                                        [e.target.name]: e.target.checked,
                                    })
                                }}
                                    className="rounded-full" id="isMarried" name="isMarried"
                                />
                            </div>
                            <div className="">
                                <button onClick={() => { console.log(user); InsertUser() }} className="px-4 py-2 bg-white text-base text-cyan-900 rounded-xl">
                                    save
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}