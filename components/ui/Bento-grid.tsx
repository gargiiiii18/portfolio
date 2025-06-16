"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./Globe";
import { GlobeDemo } from "../GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { TechStack } from "./TechStack";
import { Technologies } from "./Technologies";
import { Orbit } from "./Orbit";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  className,
  title,
  description,
  desc2,
  header,
  icon,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  desc2?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('codereevee@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
          className,
        `group/bento relative shadow-input ${(id==3 && 'md:h-[165px]')} ${(id!=3 && id!=6) && "p-4"} justify-between space-y-4 rounded-2xl mx-8 md:mx-0 transition duration-200 hover:shadow-xl border-white/[0.1] bg-black shadow-none border`,
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        backgroundColor: 'linear-gradient(90deg,rgba(250, 20, 238, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
      }}
    >
    

      <div className={`relative w-full ${(id==1 || id==3) && "md:h-full"} ${(id!=4) && "overflow-hidden"} transition duration-200 group-hover/bento:translate-x-2`}>
        <div className={`${(id==1 || id==2 || id==6) && "absolute"} ${id==3 && "md:absolute left-4"} pl-4 top-4 font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-neutral-300`}>
          {description}
        </div>
        <div className={`${(id==1 || id==2 || id==6) && "absolute -top-4"} ${id==3 && "md:absolute left-4"} top-10 pl-4 my-2 font-sans font-normal lg:text-xl max-w-116 z-10 text-neutral-200`}>
          {title}
        </div>
        {id==1 && (
           <div className={`${(id==1 || id==2 || id==6) && "absolute"} pl-4 top-35 font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-neutral-300`}>
          {desc2}
        </div>
        )}
         <div className={`flex ${id==3 && "absolute top-5"} ${id==3 && "md:absolute"} relative h-full w-full`}>
            <img 
            className={cn(
              imgClassName, 'object-center', 'object-cover'
            )}
            src={img}
            alt={spareImg} />
        </div>

            {
              id == 3 && (
          
                      <TechStack/>

              )
            }
            {
              id == 4 && (

                      //  <TechnologiesImgs/> 
                      <Orbit/>

              )
            }


        {
          id == 6 && (

            <BackgroundGradientAnimation>
              <div className="relative -bottom-5 z-10 flex w-full justify-center items-center text-white font-bold">
               <div className="mt-15 mb-5 relative">
                <div className={`absolute z-20 -bottom-5`}>
                    <Lottie options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                      }
                    }}/>
                </div>
                <MagicButton
                  otherClasses="z-20"
                  title={copied ? "Email Copied!" : "Copy my Email"}
                  icon={<IoCopyOutline/>}
                  position="left"
                  handleClick={handleCopy}
                />
            </div>
              </div>
              </BackgroundGradientAnimation>
          )
        }
       
      </div>
    </div>
  );
};
