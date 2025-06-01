import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./Globe";
import { GlobeDemo } from "../GridGlobe";

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
  header,
  icon,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
          className,
        "group/bento shadow-input row-span-1 justify-between space-y-4 rounded-2xl border border-neutral-200 bg-white mx-8 md:mx-0 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        backgroundColor: 'linear-gradient(90deg,rgba(250, 20, 238, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
      }}
    >
    

      {/* {header} */}
      
      {/* {id===6 && 
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <BackgroundGradientAnimation gradientBackgroundStart="rgb(157, 78, 221)
" gradientBackgroundEnd="rgb(0, 255, 255)" size="30%">
              <div className="absolute z-50 flex h-full w-full justify-center items-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          </div>
      }  */}

      <div className="relative overflow-hidden transition duration-200 group-hover/bento:translate-x-2">

        {/* {id===6 && 
          <div className="relative overflow-hidden transition duration-200 group-hover/bento:translate-x-2">
            <BackgroundGradientAnimation gradientBackgroundStart="rgb(157, 78, 221)
              " gradientBackgroundEnd="rgb(0, 255, 255)" size="20%">
              <div className="absolute z-50 flex w-full justify-center items-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          </div>
        
          } */}
        
        <div className={`${(id==1 || id==2 || id==6) && "absolute"} pl-4 top-4 font-sans text-sm md:text-xs lg:text-base z-10 text-neutral-500 font-extralight dark:text-neutral-300`}>
          {description}
        </div>
        <div className={`${(id==1 || id==2 || id==6) && "absolute"} top-10 pl-4 mt-2 mb-2 font-sans font-normal lg:text-xl max-w-96 z-10 text-neutral-600 dark:text-neutral-200`}>
          {title}
        </div>

        {/* <div className={`${id==2 || id==5 ? "absolute" : ""} pl-4 top-4 font-sans text-sm md:text-xs lg:text-base z-10 text-neutral-500 font-extralight dark:text-neutral-300`}>
          {description}
        </div>
        <div className={`${id==2 || id==5 ? "absolute" : ""} top-10 pl-4 mt-2 mb-2 font-sans font-normal lg:text-xl max-w-96 z-10 text-neutral-600 dark:text-neutral-200`}>
          {title}
        </div> */}

         <div className="relative h-full w-full">
            <img 
            className={cn(
              imgClassName, 'object-center', 'object-cover'
            )}
            src={img}
            alt={spareImg} />
        </div>
        {
          id === 6 && (
              <BackgroundGradientAnimation gradientBackgroundStart="rgb(157, 78, 221)" gradientBackgroundEnd="rgb(0, 255, 255)" size="20%">
              <div className="absolute z-50 flex w-full justify-center items-center text-white font-bold"/>
              </BackgroundGradientAnimation>
          )  
        }
       
      </div>
       
    
    </div>
  );
};
