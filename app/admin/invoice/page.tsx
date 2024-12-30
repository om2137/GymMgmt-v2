import { List } from "@/components/List";
import axios from "axios";

async function getInvoices() {
    try {
      const response = await axios.get("http://localhost:3000/api/invoices")
        return response.data;
    }  catch(e) {
      console.log(e);
    }
}

export default async function Invoice(){
    
     const invoicesList =await getInvoices();
     console.log(invoicesList);

    return(
        <div className="w-11/12 flex justify-center h-11/12 my-4 mx-auto">
            {/* <div className="h-full flex flex-col justify-center items-center">
                <div className="p-4 text-8xl uppercase font-bold my-auto">
                    Invoice
                </div>
            </div> */}
            <List listName={"Invoice List"} invoices={invoicesList}/>
        </div>
    )
}