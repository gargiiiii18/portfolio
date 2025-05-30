import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { FaHome } from "react-icons/fa";
import {BentoGridDemo}from "@/components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100 mx-auto flex flex-col justify-center items-center overflow-hiddensm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>}
      ]}/>
  
  <div className="flex flex-col justify-center items-center gap-0">
      <Hero/>
      {/* <BentoGridDemo/> */}
        </div>
      </div>
    </main>
  );
}
