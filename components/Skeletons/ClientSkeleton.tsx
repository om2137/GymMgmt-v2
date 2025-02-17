import CardSkeleton from "@/components/Skeletons/CardSkeleton";


export default function ClientSkeleton() {
    return (
        <div className={`relative w-full h-full flex flex-wrap justify-center bg-cyan-200 dark:bg-cyan-700 rounded-xl`} >
            <div className="flex justify-between items-center text-2xl text-white bg-cyan-800 dark:bg-cyan-900 font-bold px-6 py-4 w-full rounded-t-xl ">
                <div className="my-2">Clients</div>
                <button className="my-2">Filter</button>
            </div>

            <div
                className={`
                          w-full min-h-[16.5rem] max-h-[36rem] overflow-auto 
                          grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
                          p-4 pb-8`
                }>
                {
                    [1,2].map((card) => (
                        <div
                            key={card}
                            className={`
                                      relative group hover:z-10 focus:z-10 transition-all m-2 
                                    ? 'hover:bottom-10' : ''}
                                  `}
                        >
                            <CardSkeleton/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
