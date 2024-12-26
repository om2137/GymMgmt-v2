export function ClientList(){

    const clients = [
        // {key:1, name:"home", route:"/"},
        {key:2, name:"dashboard", route:"/admin"},
        {key:3, name:"admission", route:"/admin/admission"},
        {key:4, name:"invoice", route:"/admin/invoice"},
        {key:5, name:"SignIn", route:"/signin"}
    ]

    return(
        <div className="h-4/5 w-4/5 mx-auto ">
            <div className="h-full mx-12 mt-8 pb-4 flex flex-col items-center capitalize bg-cyan-700 rounded-xl">
                <div className="w-full flex py-4 px-8 justify-between rounded-t-xl text-xl font-semibold bg-cyan-900">
                    <div>Client list</div>
                    <div>filter</div>
                </div>
                <div className="w-full overflow-auto mx-4 pt-2" id="list">
                {
                    clients.map((client)=>(
                        <div key={client.key} className="w-full h-20 flex items-center">
                            <div className="w-full mx-4 my-auto p-4 bg-cyan-900 rounded-xl">
                                {client.name}
                            </div>
                            
                        </div>
                    ))
                }
                {
                    clients.map((client)=>(
                        <div key={client.key} className="w-full h-20 flex items-center">
                            <div className="w-full mx-4 my-auto p-4 bg-cyan-900 rounded-xl">
                                {client.name}
                            </div>
                            
                        </div>
                    ))
                }
                {
                    clients.map((client)=>(
                        <div key={client.key} className="w-full h-20 flex items-center">
                            <div className="w-full mx-4 my-auto p-4 bg-cyan-900 rounded-xl">
                                {client.name}
                            </div>
                            
                        </div>
                    ))
                }
                </div>
                
            </div>
        </div>
    )
}