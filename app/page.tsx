import Body from "@/components/commons/body";
import { Footer } from "@/components/commons/Footer";
import { Header as Navbar } from "@/components/commons/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-auto text-cyan-950 dark:text-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex-1 pt-24 ">
        <Body Welcome={"home"} H1={"Hello, there"} />
        {/* <Body /> */}
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
