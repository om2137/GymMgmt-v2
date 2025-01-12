
import { ClientGrid } from "@/components/ClientGrid";
import axios from "axios";

async function getUserDetails() {
    try {
      const response = await axios.get("http://localhost:3000/api/clients")
        return response.data;
    }  catch(e) {
      console.log(e);
    }
}

export default async function Clients(){
    
    const users = await getUserDetails();
    return(
        <div className="w-4/5 h-full my-4 mx-auto">
            <div className="m-2 p-2 sm:p-4 sm:m-4 "><ClientGrid clients={users}/></div>
            
        </div>
    )
}