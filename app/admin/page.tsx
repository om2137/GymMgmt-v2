
export default function Dashboard(){
    return(
        <div className="w-4/5 h-full mx-auto my-4">
            <div className="h-full p-4 m-4 flex flex-col capitalize text-2xl justify-start items-start">
                <div className="px-4 pb-4 text-4xl capitalize font-semibold">
                    <span className="font-light">Good afternoon, </span>
                    Admin
                    
                </div>
                <div className="w-[99%] h-48 sm:h-36 m-1 capitalize flex items-center sm:flex-row">
                    <div className="w-1/4 h-full flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        total
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        active
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        due
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        inactive
                    </div>
                </div>
                <div className="w-full h-96 flex">
                    <div className="w-1/2 flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        client chart
                    </div>
                    <div className="w-1/2 flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        revenue chart
                    </div>
                </div>
                <div className="w-full h-96 flex">
                    <div className="w-full flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        due paymenta
                    </div>
                </div>
                <div className="w-full h-96 flex">
                    <div className="w-1/2 flex flex-col">
                        <div className="h-1/2 flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                            new client
                        </div>
                        <div className="h-1/2 flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                            old client
                        </div>
                    </div>
                    
                    <div className="w-1/2 flex justify-center items-center bg-cyan-100 dark:bg-cyan-900 rounded-xl m-2">
                        client wise packages
                    </div>
                </div>
            </div>
        </div>
    )
}