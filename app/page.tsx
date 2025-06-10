import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { FaHome } from "react-icons/fa";
import {BentoGridDemo}from "@/components/Grid";
import { GlobeDemo } from "@/components/GridGlobe";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative h-full overflow-clip bg-black-100 mx-auto flex flex-col justify-center items-center sm:px-10 px-5">


      <div className="relative z-10 max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
    <div className="-top-60 md:-top-30 absolute w-full h-full">
        <GlobeDemo/>
        </div>
        <div className="z-10 flex flex-col justify-center items-center gap-0">
    
      
      <Hero/>
      {/* <BentoGridDemo/> */}
        </div>
      <Projects/>  
      </div>
      <Footer/>
    </main>
  );
}
