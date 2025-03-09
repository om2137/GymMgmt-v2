// import InitChart from "@/components/Charts/InitChart";
'use client'
import { Button } from "@/components/Buttons/Button";
import { LineChartComp, PieChartComp } from "@/components/Charts/InitChart";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function Dashboard() {
    const clients = [
        { value: 10, date: "01" },
        { value: 30, date: "02" },
        { value: 20, date: "03" },
        { value: 40, date: "04" },
        { value: 50, date: "05" }
    ]
    const revenue = [
        { value: 10000, date: "01" },
        { value: 70000, date: "02" },
        { value: 40000, date: "03" },
        { value: 80000, date: "04" },
        { value: 90000, date: "05" }
    ]
    const user = useSession();
    return (
        <div className="w-11/12 lg:w-4/5 h-full mx-auto my-4">
            <div className="h-full m-2 p-2 sm:p-4 sm:m-4 flex flex-col capitalize text-2xl justify-start items-start">
                <div className="px-4 pb-4 text-4xl capitalize font-semibold">
                    <span className="font-light">Good afternoon, </span>
                    {user.data?.user?.name} <Button Name={"sonner"} properties="text-lg" onClick={() => 
                            {
                                console.log("sonner");
                                toast.success('Event has been created', {
                                    description: 'Monday, January 3rd at 6:00pm',
                                  })
                            }
                        } />
                </div>
                {/* <div>
                    <InitChart />
                </div> */}
                <div className="w-[99%] h-96 sm:h-36 m-1 capitalize grid gap-2 grid-cols-2 sm:grid-cols-4 items-center sm:flex-row">
                    
                    <div className=" h-full flex flex-col justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl p-4">
                        <div className="h-full w-full flex flex-col justify-between ">
                            <div className="text-left p-2">total</div>
                            <div className="font-bold text-3xl text-center pb-6">500</div>
                        </div>
                    </div>
                    <div className=" h-full flex flex-col justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl p-4">
                        <div className="h-full w-full flex flex-col justify-between ">
                            <div className="text-left p-2">active</div>
                            <div className="font-bold text-3xl text-center pb-6">300</div>
                        </div>
                    </div>
                    <div className=" h-full flex flex-col justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl p-4">
                        <div className="h-full w-full flex flex-col justify-between ">
                            <div className="text-left p-2">pending</div>
                            <div className="font-bold text-3xl text-center pb-6">50</div>
                        </div>
                    </div>
                    <div className=" h-full flex flex-col justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl p-4">
                        <div className="h-full w-full flex flex-col justify-between ">
                            <div className="text-left p-2">inactive</div>
                            <div className="font-bold text-3xl text-center pb-6">200</div>
                        </div>
                    </div>
                </div>
                <div className="w-[99%] lg:h-96 h-[48rem] grid gap-2 grid-cols-1 lg:grid-cols-2 pl-2 mt-2">
                {/* <div className="w-full h-96 flex p-1"> */}
                    <div className="flex w-full relative justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl">
                        <span className="absolute top-6">clients growth</span>
                        <LineChartComp data={clients} />
                    </div>
                    <div className="flex w-full relative justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl">

                        <span className="absolute top-6">revenue growth</span>
                        <LineChartComp data={revenue} />
                    </div>
                </div>
                <div className="w-full h-96 flex">
                    <div className="w-full flex flex-col justify-top items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        <div className="m-4 mb-0">upcoming payment</div>
                        <div className="w-[95%] rounded-md overflow-auto m-4">
                            {
                                revenue.map((invoice) => (
                                    <div key={invoice.date} className="bg-cyan-700 m-2 rounded-lg flex justify-between px-6">
                                        <div className="p-4">{invoice.date}</div>
                                        <div className="p-4">{invoice.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full md:h-96 flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full flex flex-col">
                        <div className="h-1/2  flex flex-col justify-between  bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2 p-6">
                            <div>new client</div>
                            <div className="font-bold text-center text-5xl text-green-500 m-6">+40</div>
                        </div>
                        <div className="h-1/2 flex flex-col justify-between  bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2 p-6">
                            <div>inactive Clients</div>
                            <div className="font-bold text-center text-5xl text-red-500 m-6">-10</div>
                        </div>
                    </div>

                    <div className="min-w-[95%] md:min-w-0 md:w-1/2 flex relative justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl p-4 m-2">

                        <span className="absolute top-6">client wise packages</span>
                        <PieChartComp />
                    </div>
                </div>
            </div>
        </div>
    )
}