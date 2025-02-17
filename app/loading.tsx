import Loader from "@/components/commons/Loader";

export default function Loading(){
    return(
        <div className="h-[100vh] flex justify-center items-center">
            <Loader />
        </div>
    ) 
}