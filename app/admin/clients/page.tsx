
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
        <div>
            <ClientGrid clients={users}/>
        </div>
    )
}