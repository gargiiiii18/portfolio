import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="relative bg-black-100 mx-auto flex  flex-col justify-center items-center overflow-hiddensm:px-10 px-5">
      <Hero/>
      <div className="m-5 p-3 text-center">
        <h1 className="text-3xl font-bold text-primary">Welcome</h1>
      </div>
    </main>
  );
}
