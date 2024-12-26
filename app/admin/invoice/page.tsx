import { List } from "@/components/List";

export default function Invoice(){
    const clients = [
        // {key:1, name:"home", route:"/"},
        {key:2, name:"dashboard", route:"/admin"},
        {key:3, name:"admission", route:"/admin/admission"},
        {key:4, name:"invoice", route:"/admin/invoice"},
        {key:5, name:"SignIn", route:"/signin"}
    ]
    return(
        <div className="w-11/12 flex justify-center h-11/12 my-4 mx-auto">
            {/* <div className="h-full flex flex-col justify-center items-center">
                <div className="p-4 text-8xl uppercase font-bold my-auto">
                    Invoice
                </div>
            </div> */}
            <List listName={"Invoice List"} clients={clients} />
        </div>
    )
}