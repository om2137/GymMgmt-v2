import { Footer } from "@/components/commons/Footer";
import { Header as Navbar } from "@/components/commons/header";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }){
  return(
    <div className="flex flex-col h-screen text-cyan-950  overflow-auto  dark:text-white  dark:bg-cyan-950">
      <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
      </div>
    
      <div className="flex-1 pt-24 ">
        {children} 
        <Toaster position="top-right" richColors  /> 
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
    
}