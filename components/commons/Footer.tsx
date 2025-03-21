
export const Footer = function () {
    const socials = [
        {key:1, name:"X"},
        {key:2, name:"Instagram"},
        {key:3, name:"linkedIn"},
        {key:4, name:"careers"},
    ];
    return(
        <div className="text-cyan-950 dark:text-white">
            <div className="flex flex-col sm:flex-row m-8 capitalize justify-between item-center">
                <div className="flex font-bold justify-center sm:justify-start font-sans text-lg sm:text-xl opacity-40">
                    <span className="my-auto">
                        © 2024 EasyDev, Inc.
                    </span>
                    
                </div>
                <div  className="flex flex-wrap justify-center font-sans font-semibold text-sm sm:text-base align-baseline">
                    {socials.map((item) => ( 
                        <div  key={item.key}  className="px-4">
                            <button className="py-4 capitalize">
                                {item.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}