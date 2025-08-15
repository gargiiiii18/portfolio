"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { IoSearchSharp  } from "react-icons/io5";
import { TechStack } from "./TechStack";
import { Orbit } from "./Orbit";
import { Snake } from "./Snake";

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
  className,
  title,
  description,
  desc2,
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

  const [viewed, setViewed] = useState(false);
  const[isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
      const updateScreensize = () => {
          setIsMobile(window.innerWidth<768);
          }
      updateScreensize();
      window.addEventListener("resize", updateScreensize);

      return () => window.removeEventListener("resize", updateScreensize);
        }, []);


        const handleCopy = () => {
        // navigator.clipboard.writeText('codereevee@gmail.com');
         window.open("https://drive.google.com/file/d/1Kmo5l0ja2X2RVR_U8yJTpojy_692pfGy/view?usp=sharing", "_blank") 
        setViewed(true);
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
    

      <div className={`relative w-full ${(id==1 || id==3) && "md:h-full"} ${(id!=5) && "overflow-hidden"} transition duration-200 group-hover/bento:translate-x-2`}>
        <div className={` ${(id!=3 && id!=4) && "absolute"} ${id==3 && "absolute left-4"} ${id==4 && 'mt-4'} pl-4 top-4 font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-neutral-300`}>
          {description}
        </div>
        <div className={`${id==2 && "md:w-40"} ${(id!=3 && id!=4) && "absolute -top-4"} ${id==3 && "absolute left-4"} ${id==4 && "mb-5"} ${id==6 && ""} top-10 pl-4 my-2 font-sans font-normal lg:text-xl max-w-116 z-10 text-neutral-200`}>
          {title}
          {id == 4 && (
            <a className="text-purple-300 font-normal underline underline-offset-3" href="https://github.com/gargiiiii18" target="blank">Github</a>
          )}
        </div>
        {id==1 && (
           <div className={`${(id==1 || id==2 || id==6) && "absolute"} pl-4 top-35 font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-neutral-300`}>
          {desc2}
        </div>
        )}
         <div className={`flex ${id==5 || id==2 && "justify-end"} ${id==3 && "absolute"} relative h-full w-full`}>
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

                      <Snake/>

              )
            }
            {
              id == 5 && (
                      <Orbit/>

              )
            }


        {
          id == 6 && (

            <BackgroundGradientAnimation>
              <div className="relative -bottom-5 z-10 flex h-45 md:h-80 w-full justify-center items-center text-white font-bold">
               <div className="md:top-40 top-15 absolute">
                <div className={`absolute z-20 -bottom-5`}>
                    <Lottie options={{
                      loop: viewed,
                      autoplay: viewed,
                      animationData,
                      rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                      }
                    }}/>
                
                </div>
                {!isMobile && 
                    <img className="absolute z-20 h-20 -top-15 -right-26 md:-top-15 md:left-20" src="/resume.png" alt="mail" />
                }
                <MagicButton
                  otherClasses="z-20"
                  title="View"
                  icon={<IoSearchSharp/>}
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
