export default function CardSkeleton() {
    return (
      <div
        className="
          scale-90 transition-transform ease-in-out transform origin-center 
          flex flex-col text-left bg-cyan-600 rounded-xl shadow-lg shadow-cyan-200 relative animate-pulse
        "
      >
        {/* Image Placeholder */}
        <div className="aspect-[3/4] w-full bg-cyan-500 rounded-xl relative">
          <div className="w-full h-full bg-cyan-400 dark:bg-cyan-500 rounded-lg"></div>
          <div className="bg-red-500 opacity-0 text-white text-sm rounded-lg p-2 absolute top-2 right-2"></div>
        </div>
  
        {/* Content Placeholder */}
        <div className="absolute bottom-0 left-0 w-full rounded-b-lg p-2 bg-gradient-to-b from-transparent to-cyan-700">
          <div className="h-4 w-3/4 bg-cyan-500 dark:bg-cyan-600 rounded mb-2"></div>
          <div className="h-6 w-1/2 bg-cyan-500 dark:bg-cyan-600 rounded"></div>
  
          <div className="hidden group-hover:flex transition-transform delay-1000 ease-in-out justify-between text-center text-xl mt-2">
            <div className="flex flex-col justify-between">
              <div className="h-4 w-24 bg-cyan-500 dark:bg-cyan-600 rounded"></div>
              <div className="h-4 w-16 bg-cyan-500 dark:bg-cyan-600 rounded mt-2"></div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="h-4 w-20 bg-cyan-500 dark:bg-cyan-600 rounded"></div>
              <div className="h-8 w-24 bg-white dark:bg-cyan-500 rounded-xl mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  