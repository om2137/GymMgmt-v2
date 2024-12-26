interface Props{
    Welcome?:string;
    H1?:string;
}
export default function Body({ Welcome,H1 }: Props) {
    return (
        <div className="m-auto capitalize mt-10">
            <div className="font-bold text-4xl text-center m-12 p-8">
                Welcome to {Welcome || "Co. Name"} 
            </div>
            <div className="mt-8 flex text-left items-center justify-center">
                <div className="p-4  font-sans">
                    <div className="font-thin uppercase text-right text-sm">
                    some right text
                    </div>
                    <div className="font-normal text-right text-base">
                    some text to right
                    </div>
                    <div className="w-96 font-bold text-8xl">
                    {H1 || "hi there"}
                    </div>
                    <div className="font-semibold text-4xl">
                    some text is here 
                    </div>
                    <div className="font-medium text-xl">
                    some other text
                    </div>
                </div>
                <div className=" font-sans rotate-90">
                    <div className=" font-bold text-8xl ">
                        New
                    </div>
                </div>
            </div>
            <div className="font-bold text-4xl text-end m-12 p-8">
                To be continued ...
            </div>
        </div>
        
    )
}