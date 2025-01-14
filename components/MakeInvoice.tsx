'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Buttons/Button";
import { SearchBar } from "./commons/SearchBar";
import { Dropdown } from "./InputComp/DropDown";

interface props {
    client: client[];
}

interface client {
    id: number;
    Firstname: string;
    Lastname: string;
    address: string;
    contact: string;
    dob: Date;
    gender: string;
    IsMarried: boolean;
    admissionDate: string;
    cardNumber: string;
    balance: string;
}
interface invoice {
    id?: number;
    member_id: number;
    paidDate: string;
    paidOn: string;
    dueDate: string;
    facility: string;
    fees: number;
    admFee: number;
    paymentType: string;
}

const facility = [{ key: 1, name: "cardio" }, { key: 2, name: "weights" }];
const duration = [{ key: 1, name: "monthly" }, { key: 2, name: "quarterly" }, { key: 3, name: "annual" }]
const paymentType = [{ key: 1, name: "Online" }, { key: 2, name: "Cash" }];
const admissionFee = [{ key: 1, name: "100" }, { key: 2, name: "200" }];

export function MakeInvoice(Props: props) {
    const [newInvoice, setNewInvoice] = useState<invoice>();
    const [value, setValue] = useState('');

    async function insertInvoice() {
        const response = await axios.post(`http://localhost:3000/api/invoices`, newInvoice);
        alert(response);
        console.log(response);
    }
    console.log(value);
    console.log(Props.client);

    useEffect(() => {
        setNewInvoice({
            member_id: 25,
            paidDate: "2025-01-10T00:00:00.000Z",
            paidOn: "2025-01-09T00:00:00.000Z",
            dueDate: "2025-01-15T00:00:00.000Z",
            facility: "full access",
            fees: 100.0,
            admFee: 10.0,
            paymentType: "UPI"
        })
    }, [])

    return (
        <div className="w-full h-full flex flex-col items-center ">


            <div className="w-4/5 bg-cyan-800 rounded-xl p-4 m-4">
                <div className="flex justify-center capitalize text-xl font-semibold m-4">
                    <div className="p-2">member: </div>
                    <div>
                        <SearchBar />
                    </div>

                </div>
                <div className="grid grid-cols-2">
                    <div className="mx-6">
                        <Dropdown list={facility} setValue={setValue} name={"facility"} placeholder={"select facility"} />
                    </div>
                    <div className="mx-6">
                        <Dropdown list={paymentType} setValue={setValue} name={"payment Type"} placeholder={"select PaymentType"} />
                    </div>
                    <div className="mx-6">
                        <Dropdown list={duration} setValue={setValue} name={"duration"} placeholder={"select Duration"} />
                    </div>

                    <div className="mx-6">
                        <Dropdown list={admissionFee} setValue={setValue} name={"admission Fee"} placeholder={"select admission fee"} />
                    </div>
                </div>
                <div className="grid grid-cols-2 m-4">
                    <div>
                        <label htmlFor="dob" className="p-2">Paid On:</label>
                        <input
                            type="date"
                            // onChange={}
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none mx-2"
                            name="dob"
                        />
                    </div>
                    <div>
                        <label htmlFor="start" className="p-2">plan start from:</label>
                        <input
                            type="date"
                            // onChange={}
                            className="rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none mx-2"
                            name="dob"
                        />
                    </div>
                </div>
                <div className="flex justify-end pr-10 ">
                    <Button Name={"Insert"} properties="" onClick={() => { console.log("new invoice"); insertInvoice() }} />
                </div>
            </div>
        </div>
    )
}

