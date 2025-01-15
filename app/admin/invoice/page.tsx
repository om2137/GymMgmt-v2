import { List } from "@/components/List";
import { MakeInvoice } from "@/components/MakeInvoice";
import axios from "axios";

async function getInvoices() {
  try {
    const response = await axios.get("http://localhost:3000/api/invoices")
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function getClients() {
  try {
    const response = await axios.get("http://localhost:3000/api/clients")
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export default async function Invoice() {

  const invoicesList = await getInvoices();
  const clientList = await getClients();
  
  return (
    <div className="w-11/12 flex flex-col   h-11/12 my-4 mx-auto">
      <MakeInvoice client={clientList}/>
      <List listName={"Invoice List"} invoices={invoicesList} />
    </div>
  )
}