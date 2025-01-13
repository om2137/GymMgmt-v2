
interface props{
    client:client[]
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
}
export function MakeInvoice(Props: props){
    return(
        <div>{Props.client[1].Firstname}</div>
    )
}