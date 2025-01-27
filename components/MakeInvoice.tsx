'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Buttons/Button";
import { SearchBar } from "./commons/SearchBar";
import { Dropdown } from "./InputComp/DropDown";
import { motion } from "framer-motion";

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
    avatar?: string;
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

const facilityList = [{ key: 1, name: "cardio", value: 600 }, { key: 2, name: "weights", value: 1000 }];
const durationList = [{ key: 1, name: "monthly", value: 1 }, { key: 2, name: "quarterly", value: 3 }, { key: 3, name: "annual", value: 12 }]
const paymentTypeList = [{ key: 1, name: "Online", value: 'online' }, { key: 2, name: "Cash", value: 'cash' }];
const admissionFeeList = [{ key: 1, name: '100', value: 100 }, { key: 2, name: '200', value: 200 }];

export function MakeInvoice(Props: props) {
    const [newInvoice, setNewInvoice] = useState<invoice>({
        member_id: 0,
        paidDate: '',
        paidOn: '',
        dueDate: '',
        facility: '',
        fees: 0,
        admFee: 0,
        paymentType: ''
    });
    const [facility, setFacility] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [duration, setDuration] = useState('');
    const [admissionFee, setAdmissionFee] = useState('0');
    const [clientId, setClientId] = useState(0);
    const [newInvoiceBtn, setNewInvoiceBtn] = useState(true);

    const clientList = Props.client?.map((member) => ({
        id: member.id,
        name: `${member.Firstname} ${member.Lastname}`,
        avatar: 'https://res.cloudinary.com/dqpsoptzm/image/upload/v1736962825/V2/default_m9uvjp.png'
    }));
    useEffect(() => {
        setNewInvoice({
            ...newInvoice,
            member_id: clientId,
            facility: facility,
            fees: Number(admissionFee) + (Number(duration) * Number(facility)),
            admFee: Number(admissionFee),
            paymentType: paymentType
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientId, admissionFee, duration, facility, paymentType])

    async function insertInvoice() {
        const response = await axios.post(`http://localhost:3000/api/invoices`, newInvoice);
        alert(response);
        console.log(response);

        // console.log(newInvoice)
    }
    function handlePaidDate(e: { target: { value: string | number | Date; }; }) {
        const dueDate = new Date(e.target.value);
        dueDate.setMonth(new Date(e.target.value).getMonth() + Number(duration));
        setNewInvoice({
            ...newInvoice,
            paidOn: new Date(e.target.value).toISOString(),
            dueDate: dueDate.toISOString()
        }
        );
    }

    return (
        <>
            <div className="w-full h-full flex flex-col items-center ">
                {/* {newInvoiceBtn ? */}
                <div className="w-4/5  bg-cyan-800 rounded-xl p-4 m-4">
                    <div className="flex justify-between px-4 m-4">
                        <div className="flex items-center text-4xl font-bold ">
                            Invoice
                        </div>
                        <div className="flex items-center">
                            {newInvoiceBtn ?
                                <Button
                                    Name={"New Invoice"}
                                    btnColor="bg-white"
                                    onClick={() => setNewInvoiceBtn(false)}
                                /> :
                                <Button Name={"Close"} properties="sm:text-sm" onClick={() => setNewInvoiceBtn(true)} />
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="w-4/5 bg-cyan-800 rounded-xl p-4 m-4"> */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: newInvoiceBtn ? 0 : 1, height: newInvoiceBtn ? 0 : "auto"  }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {clientId === 0 ?
                            <div className="flex justify-center capitalize text-xl font-semibold m-4">
                                <div className="p-2">member: </div>
                                <div>
                                    <SearchBar list={clientList} setId={setClientId} />
                                </div>
                            </div>
                            :
                            <div className="flex justify-center items-center">
                                <div className="px-6 text-xl font-semibold">
                                    Selected member: {clientId}
                                </div>
                                <button >
                                    <Button onClick={() => setClientId(0)} Name="X" />
                                </button>
                            </div>
                        }
                        <div className="w-full flex flex-wrap justify-center p-4">
                            <div className="mx-6 my-2">
                                <Dropdown width='w-24 md:w-40 lg:w-48' list={facilityList} setValue={setFacility} name={"facility"} placeholder={"select facility"} />
                            </div>
                            <div className="mx-6 my-2">
                                <Dropdown width='w-24 md:w-40 lg:w-48' list={paymentTypeList} setValue={setPaymentType} name={"payment Type"} placeholder={"select PaymentType"} />
                            </div>
                            <div className="mx-6 my-2">
                                <Dropdown width='w-24 md:w-40 lg:w-48' list={durationList} setValue={setDuration} name={"duration"} placeholder={"select Duration"} />
                            </div>
                            <div className="mx-6 my-2">
                                <Dropdown width='w-24 md:w-40 lg:w-48' list={admissionFeeList} setValue={setAdmissionFee} name={"admission Fee"} placeholder={"select admission fee"} />
                            </div>
                            <div className="flex justify-between w-40 md:w-60 lg:w-64 mx-6 my-2">
                                <label htmlFor="dob" className="p-2">Paid On:</label>
                                <input
                                    type="date"
                                    onChange={handlePaidDate}
                                    className="w-28 rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none mx-2"
                                    name="dob"
                                />
                            </div>
                            <div className="flex justify-between w-40 md:w-60 lg:w-64 mx-6 my-2">
                                <label htmlFor="start" className="p-2">start from:</label>
                                <input
                                    type="date"
                                    onChange={(e) => {
                                        setNewInvoice({
                                            ...newInvoice,
                                            paidDate: new Date(e.target.value).toISOString(),
                                        })
                                    }}
                                    className="w-28 rounded bg-cyan-100 border-cyan-900 dark:bg-cyan-900 border dark:border-white p-2 focus:outline-none mx-2"
                                    name="StartDate"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pr-10 ">
                            <Button Name={"Insert"} properties="" onClick={() => { insertInvoice(); }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )

}


