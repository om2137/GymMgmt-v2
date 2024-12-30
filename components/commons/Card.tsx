
import Image from "next/image";
import DefaultImg from "/public/default.png"

interface Props {
    heading: string;
    description: string;
}

export default function Card({ heading, description }: Props) {
    
    // const [visibility, setVisibility] = useState('hidden');
   
    // function handleVisiblity(){
    //     console.log('click registered', visibility)

    //     if(visibility === 'hidden' ){
    //         setVisibility('flex') ;

    //     }else{
    //         setVisibility('hidden');
    //     }
    // }

    return (
        <div className="hover:scale-110 group relative flex flex-col text-left text-black bg-cyan-600 rounded-xl shadow-md shadow-cyan-800">
            <div className="relative">
                <div className=" w-[260px] h-[166px] bg-cyan-600 rounded-xl">
                    <Image
                        src={DefaultImg}
                        fill={true}
                        alt={"no image"}
                        className="rounded-lg"
                    />
                </div>
                <div className="absolute bottom-0 pl-4 pb-2 capitalize  opacity-100 group-hover:opacity-0">
                    <p className="text-sm text-gray-700">{description}</p>
                    <h2 className="text-2xl font-bold">{heading}</h2>
                </div>
            </div>
            
            <div className={`absolute w-full capitalize text-white flex flex-col items-left top-32 
                 p-2 rounded-b-xl bg-cyan-800  opacity-0 group-hover:opacity-100`}>
                <div className="flex justify-between p-1">
                    <span>name</span>
                    <span>age</span>
                </div>
                <div className="flex justify-between items-center p-1">
                    <span className="text-sm">Contact</span>
                    <span className="text-sm font-thin">
                        address 
                    </span>
                    <button 
                        onClick={()=>console.log("modal click")} 
                        className="px-4 py-2 bg-white rounded-xl text-cyan-950"
                    >
                        mod
                    </button>
                </div>
            </div>
        </div>
    );
}
