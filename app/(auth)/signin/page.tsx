import { Footer } from "@/components/commons/Footer";
import { Header } from "@/components/commons/header";
import { SignIn } from "@/components/auth/SignIn";

export default function signin() {
    return (
        <div className="flex flex-col h-screen text-amber-950 dark:text-white  no-scrollbar">
            <MeshGradient />
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className=" my-auto">
                <SignIn />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

const MeshGradient = () => {
    return (
        <div className="mesh-gradient-bg">
            <div className="mesh-blur mesh-white"></div>
            <div className="mesh-blur mesh-blue"></div>
            <div className="mesh-blur mesh-pink"></div>
            <div className="mesh-blur mesh-purple"></div>
        </div>
    );
};
