import { AdmissionForm } from "@/components/AdmissionForm";

export default function Admission(){
    
    return(
        <div className="w-4/5 h-full mx-auto my-4">
                <div className="h-full p-4 m-4 flex flex-col capitalize text-2xl justify-center items-start">
                    <div className="p-4 text-4xl capitalize font-bold">
                        admission
                    </div>
                    <AdmissionForm />
                </div>
            </div>
    )
}