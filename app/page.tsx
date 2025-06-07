import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { FaHome } from "react-icons/fa";
import {BentoGridDemo}from "@/components/Grid";
import { GlobeDemo } from "@/components/GridGlobe";
import { Projects } from "@/components/Projects";
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black-100 mx-auto flex flex-col justify-center items-center overflow-hiddensm:px-10 px-5">


      <div className="relative z-10 max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>}
      ]}/>
    <div className="-top-60 md:-top-30 absolute w-full h-full">
        <GlobeDemo/>
        </div>
        <div className="z-10 flex flex-col justify-center items-center gap-0">
    
      
      <Hero/>
      {/* <BentoGridDemo/> */}
        </div>
      <Projects/>  
      </div>
    </main>
  );
}
