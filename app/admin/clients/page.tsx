
import { ClientList } from "@/components/ClientList";

export default function Clients(){
    
    return(
        <div className="w-11/12 flex justify-center h-11/12 my-4 mx-auto">
            {/* <div className="h-full flex flex-col justify-center items-center">
                <div className="p-4 text-8xl uppercase font-bold my-auto">
                    Invoice
                </div>
            </div> */}
            {/* <List listName={"Client List"} clients={clients} /> */}
            <ClientList/>
        </div>
    )
}